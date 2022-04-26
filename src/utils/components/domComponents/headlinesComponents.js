import { spacer_m, spacer_l } from "../style";
const spacingMedium = "margin-left:"+ spacer_m
const spacingMediumR = "margin-right:"+ spacer_m
const spacingMediumTop = "margin-top:"+ spacer_m
const spacingLarge = "margin-top:"+ spacer_l

export const groupedHeadlineHorizontal =
    <table class = "table-center"> 

         <tbody>
            <row>
                <td>
                    <image src="https://fm.sap.com/images/2014/488x275/275047_l_srgb_s_gl_0488_0275_rl_00_00.jpg" alt="" width="250" height="130" style="box-sizing: border-box; width: auto; height: 70px;" />
                </td>
                        <text style = {spacingMedium} class="headline-horizontal">
                            Trending
                        </text>
            </row>
            <div style={spacingLarge}>
                        </div>
                    
        </tbody> 
    </table>
    ;
    
    export const groupedHeadlineVertical =
    <table class = "table-center">
    <tbody>
            <text class="headline-vertical">
                Webcasts
            </text>
            <div style={spacingMediumTop}>
            <image src="https://fm.sap.com/images/2014/488x275/275047_l_srgb_s_gl_0488_0275_rl_00_00.jpg" alt="" border="0" style="box-sizing: border-box; width: auto; height: 98px;" />
            </div> 
            <div style={spacingLarge}>
                        </div>
    </tbody>
</table>

    ;