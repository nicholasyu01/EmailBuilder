import { spacer_m, spacer_s, spacer_xs } from "../../utils/components/style";
const spacingXtraSmall = "margin-top:" + spacer_xs
const spacingSmall = "margin-top:" + spacer_s
const spacingMedium = "margin-top:" + spacer_m
export const vertical =
    <table>
        <tbody>
            <image src="https://fm.sap.com/images/2014/488x275/275047_l_srgb_s_gl_0488_0275_rl_00_00.jpg" alt="" width="282" height="159" border="0" style="box-sizing: border-box; max-width: 100%; height: auto;" />
            <group-headline-component>
                <text style={spacingMedium}>
                    Content Headline
                </text>
            </group-headline-component>
            <paragraphs-component style={spacingXtraSmall}>
                <text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </text>
            </paragraphs-component>
            <link class="ds-button ds-button--primary" style={spacingSmall}>
                Learn More
            </link>
        </tbody>
    </table>;

export const horizontalLeft =
    <table >
        <tbody >
            <tr >
                <td class="fifty-section" >
                    <image src="https://fm.sap.com/images/2014/488x275/275047_l_srgb_s_gl_0488_0275_rl_00_00.jpg" alt="" width="282" height="159" border="0" style="box-sizing: border-box; max-width: 100%; height: auto;" />
                </td>
                <td class="fifty-section" >
                    <group-headline-component>
                        <text>
                            Content Headline
                        </text>
                    </group-headline-component>
                    <paragraphs-component style={spacingXtraSmall}>
                        <text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </text>
                    </paragraphs-component>
                    <link class="ds-button ds-button--primary" style={spacingSmall}>
                        Learn More
                    </link>
                </td>
            </tr>
        </tbody>
    </table>
    ;

export const horizontalRight =
    <table >
        <tbody >
            <tr >
                <td class="fifty-section" >
                    <group-headline-component>
                        <text>
                            Content Headline
                        </text>
                    </group-headline-component>
                    <paragraphs-component style={spacingXtraSmall}>
                        <text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </text>
                    </paragraphs-component>
                    <link class="ds-button ds-button--primary" style={spacingSmall}>
                        Learn More
                    </link>
                </td>
                <td class="fifty-section" >
                    <image src="https://fm.sap.com/images/2014/488x275/275047_l_srgb_s_gl_0488_0275_rl_00_00.jpg" alt="" width="282" height="159" border="0" style="box-sizing: border-box; max-width: 100%; height: auto;" />
                </td>
            </tr>
        </tbody>
    </table>
    ;

export const textOnlyContent =
    <table>
        <tbody>
            <group-headline-component>
                <text>
                    Content Headline
                </text>
            </group-headline-component>
            <paragraphs-component style={spacingXtraSmall}>
                <text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </text>
            </paragraphs-component>
            <link class="ds-button ds-button--primary" style={spacingSmall}>
                Learn More
            </link>
        </tbody>
    </table>;

export const verticalLink =
    <table>
        <tbody>
            <image src="https://fm.sap.com/images/2014/488x275/275047_l_srgb_s_gl_0488_0275_rl_00_00.jpg" alt="" width="282" height="159" border="0" style="box-sizing: border-box; max-width: 100%; height: auto;" />
            <group-headline-component >
                <text style={spacingMedium}>
                    Content Headline
                </text>
            </group-headline-component>
            <paragraphs-component style={spacingXtraSmall}>
                <text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </text>
            </paragraphs-component>
            <link-item-component>
                <div class="a--padding" style={spacingMedium}>
                    <link class="a a--linkwitharrow"> Details {'>'}
                    </link>
                </div>
            </link-item-component>
            <link class="ds-button ds-button--primary" style={spacingSmall}>
                Learn More
            </link>
        </tbody>
    </table>;

export const verticalLinkSec =
    <table>
        <tbody>
            <image src="https://fm.sap.com/images/2014/488x275/275047_l_srgb_s_gl_0488_0275_rl_00_00.jpg" alt="" width="282" height="159" border="0" style="box-sizing: border-box; max-width: 100%; height: auto;" />
            <group-headline-component style={spacingMedium}>
                <text>
                    Content Headline
                </text>
            </group-headline-component>
            <paragraphs-component style={spacingXtraSmall}>
                <text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </text>
            </paragraphs-component>
            <link-item-component>
                <div class="a--padding" style={spacingMedium}>
                    <link class="a a--linkwitharrow"> Details {'>'}
                    </link>
                </div>
            </link-item-component>
            <div style={spacingSmall}>
                <link class="ds-button ds-button--secondary">
                    Secondary Button
                </link>
            </div>
            <div style={spacingSmall}>
                <link class="ds-button ds-button--primary">
                    Learn More
                </link>
            </div>
        </tbody>
    </table>;