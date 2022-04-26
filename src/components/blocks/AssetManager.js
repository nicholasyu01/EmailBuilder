import React, { useState, useEffect, useMemo, useContext } from "react";
import axios from "axios";
import { EditorContext } from "../../context/EditorContext";
import {
  Input,
  Text,
  Toolbar,
  Title,
  Button,
  IllustratedMessage,
  Card,
  ResponsiveGridLayout,
  TabContainer,
  Tab,
  FlexBox,
  CustomListItem,
  Icon,
  BusyIndicator,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-fiori/dist/illustrations/Connection.js";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import { API_HOST } from "../../utils/api";

const assetStyle = {
  width: "100%",
};
let opened = false;

/*
This component defines the grapesJS custom asset manager


*/
function AssetManager() {
  const { editorState, setEditorState } = useContext(EditorContext);
  const [damData, setDamData] = useState(); // data from axios call
  const [assetData, setAssetData] = useState(); // formatted data from axios call
  const [assetDataCopy, setAssetDataCopy] = useState(); // used to display queried search data

  const [assetProps, setAssetProps] = useState(); // used to .select() image onto canvas
  const [searchInput, setSearchInput] = useState("");
  const [loaderStatus, setLoaderStatus] = useState(false);

  // listen to damData axios call, formats damData
  const damMemo = useMemo(() => {
    var assets = [];
    damData?.map((i) => {
      if (i.assetTitle) {
        assets.push({
          type: i?.DIGITALASSETFILE[0]?.MIME_TYPE,
          src: i?.THUMBNAIL_IMAGE_URL,
          height: i?.DIGITALASSETFILE[0]?.imageHeight,
          width: i?.DIGITALASSETFILE[0]?.imageWidth,
          name: i?.assetTitle,
        });
      }
    });
    setAssetData(assets);
    setAssetDataCopy(assets);
  }, [damData]);

  // on modal open, make axios call if data not loaded
  useEffect(() => {
    if (editorState) {
      editorState.on("modal:open", (props) => {
        if (editorState.Modal.getTitle() === "Select Image") {
          if (!opened) { // only loads images on first open of modal
            opened = true;
            setLoaderStatus(true);
            axios
              .get(`${API_HOST}/api/dam`)
              .then((data) => {
                console.log("axios data", data);
                if (data.status === 200) {
                  setDamData(data?.data?.ASSET);
                } else {
                }
                setLoaderStatus(false);
              })
              .catch((error) => {
                setLoaderStatus(false);
                console.log(error);
              });
          }
        }
      });
    }
  }, [editorState]);

  useEffect(() => {
    editorState?.on("asset:custom", (props) => {
      if (!assetProps) {
        setAssetProps({
          open: props.open,
          assets: props.assets,
          types: props.types,
          close: props.close,
          remove: props.remove,
          select: props.select,
          container: props.container,
        });
      }

      if (props.open) {
        props.container.appendChild(document.getElementById("assetsContainer"));
      }
    });
  }, [editorState]);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  const onSearchBtn = async () => {
    setLoaderStatus(true);
    await sleep(2000); // fake loader
    setAssetDataCopy(assetData.filter((i) => i.name.includes(searchInput)));
    setLoaderStatus(false);
  };

  return (
    <>
      <div style={{ display: "none" }}>
        <div id="assetsContainer">
          <Toolbar style={{ marginBottom: "12px" }} toolbarStyle="Clear">
            <Input
              id="searchInput"
              placeholder="Search"
              style={{ width: "100%" }}
              value={searchInput}
              onInput={(e) => {
                // console.log(e.target.highlightValue);
                setSearchInput(e.target.highlightValue);
              }}
            >
              <Icon
                id="searchIcon"
                slot="icon"
                name="decline"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setSearchInput('')
                }}
              />
            </Input>
            <Button onClick={onSearchBtn} design="Emphasized">
              Search
            </Button>
          </Toolbar>

          <TabContainer
            fixed={true}
            // onTabSelect={}
          >
            <Tab text="Images" icon="menu" style={{ height: "600px" }} selected>
              {loaderStatus ? ( // if loading display loader
                <div style={{textAlign: 'center'}}>
                  <BusyIndicator
                    active={loaderStatus}
                    size="Medium"
                    text="Loading"
                  ></BusyIndicator>
                </div>
              ) : ( // if not loading display results 
                <>
                  {damData && !loaderStatus? ( // if data found display data else display error
                    <>
                      <ResponsiveGridLayout
                        id="assets"
                        columnsS={2}
                        columnsM={4}
                        columnsL={5}
                        columnsXL={5}
                      >
                        {assetDataCopy?.map((i) => {
                          return (
                            <Card
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                assetProps.select(i);
                                assetProps.close();
                              }}
                            >
                              <img
                                style={assetStyle}
                                src={i.src}
                                alt="no image"
                              ></img>
                              {/* <AnalyticalCardHeader
                            style={{
                              padding: "12px 0 12px 0",
                              height: "100% !important",
                            }}
                            titleText={i.name}
                            subtitleText={i.width + "x" + i.height}
                            // unit="Unit"
                            description={i.type}
                            // value={ <img
                            //   style={assetStyle}
                            //   src={i.src}
                            // />}
                          ></AnalyticalCardHeader> */}
                              <CustomListItem
                                style={{
                                  height: "100%",
                                  padding: "12px 0 12px 0",
                                }}
                              >
                                <FlexBox direction="Column">
                                  <Title level="H4">{i.name}</Title>
                                  <Text>
                                    {i.width} x {i.height}
                                  </Text>

                                  <Text>{i.type}</Text>
                                </FlexBox>
                              </CustomListItem>
                            </Card>
                          );
                        })}
                      </ResponsiveGridLayout>
                    </>
                  ) : (
                    <IllustratedMessage 
                      name="Connection" 
                      titleText="Error Loading Data"
                      subtitleText="Please create an IT Direct Ticket with the category of IMAS_MKT_EXEC and describe the issue with as many details as you can in the ticket"
                    />
                  )}
                </>
              )}
            </Tab>
            <Tab
              text="Pictograms"
              icon="menu"
              style={{ height: "600px" }}
            ></Tab>
            <Tab text="Logos" icon="menu" style={{ height: "600px" }}></Tab>
          </TabContainer>
        </div>
      </div>
    </>
  );
}

export default AssetManager;
