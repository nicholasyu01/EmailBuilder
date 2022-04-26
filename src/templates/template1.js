const template1 = '<html><head>\n'+
'	<meta http-equiv="content-type" content="text/html; charset=utf-8">\n'+
'	<title></title>\n'+
'	<meta name="ProgId" content="Word.Document">\n'+
'	<meta name="viewport" content="width=device-width, initial-scale=1.0">\n'+
'	<style type="text/css">\n'+
'	* {\n'+
'		-ms-text-size-adjust:100%;\n'+
'		-webkit-text-size-adjust:none;\n'+
'		-webkit-text-resize:100%;\n'+
'		text-resize:100%;\n'+
'	}\n'+
'	p {margin-top: 0; margin-bottom: 1em;}\n'+
'	* [title="header-container"],\n'+
'	.header-container {min-width: auto !important;}\n'+
'	.appleLinksWhite a {color: #ffffff !important; text-decoration: none;}\n'+
'	@media only screen and (max-width:680px) {\n'+
'		table {display:table !important;}\n'+
'		td {display:table-cell !important;}\n'+
'		table[data-section="body"] {display: block !important;}\n'+
'		div[class="mobileBorder"] {\n'+
'			height: 1px !important;\n'+
'			margin:26px 0 !important;\n'+
'			background: #dddddd !important;\n'+
'		}\n'+
'		table[class="wrapper"] {min-width: 320px !important;}\n'+
'		table[class="container"] {\n'+
'			width:100% !important;\n'+
'			padding:0 10px !important;\n'+
'		}\n'+
'		* [title="header-container"],\n'+
'		.header-container {\n'+
'			width: 100% !important;\n'+
'			padding: 0 10px !important;\n'+
'		}\n'+
'		* [title="logo"] {\n'+
'			width: 60px !important;\n'+
'			height: auto !important;\n'+
'		}\n'+
'		* [title="brand"] [title="logo"] {\n'+
'			width: 60px !important;\n'+
'			height: auto !important;\n'+
'			float: right;\n'+
'		}\n'+
'		* [title="brand"] [title="tagline"] {\n'+
'			width: 86px !important;\n'+
'			height: auto !important;\n'+
'			float: right;\n'+
'		}\n'+
'		* [title="brand"] [title="ariba"],\n'+
'		* [title="brand"] [title="fieldglass"],\n'+
'		* [title="brand"] [title="hybris"],\n'+
'		* [title="brand"] [title="success-factors"] {\n'+
'			width: 100px !important;\n'+
'			height: auto !important;\n'+
'			float: left;\n'+
'		}\n'+
'		* [title="brand"] [title="fieldglass"] {width: 129px !important;}\n'+
'		* [title="brand"] [title="hybris"] {width: 99px !important;}\n'+
'		* [title="brand"] [title="success-factors"] {width: 163px !important;}\n'+
'		* [title="brand"] [title="chat"] {\n'+
'			width: 26px !important;\n'+
'			height: auto !important;\n'+
'			margin-left: 11px;\n'+
'		}\n'+
'		table[class="flexible"] {\n'+
'			width:100% !important;\n'+
'			margin-left:0 !important;\n'+
'			margin-right:0 !important;\n'+
'			float:none;\n'+
'		}\n'+
'		table[class="hide"],\n'+
'		td[class="hide"],\n'+
'		td[class="hide mceEditable"],\n'+
'		table[class="hide-email"],\n'+
'		td[class="hide-email"],\n'+
'		td[class="hide-email mceEditable"],\n'+
'		td[class="hide"] img,\n'+
'		span[class="hide"],\n'+
'		br[class="hide"] {\n'+
'			display:none !important;\n'+
'			width:0 !important;\n'+
'			height:0 !important;\n'+
'			padding:0 !important;\n'+
'			font-size:0 !important;\n'+
'			line-height:0 !important;\n'+
'		}\n'+
'		td[class="img-flex"] img,\n'+
'		td[class="img-flex mceEditable"] img {\n'+
'			width:100% !important;\n'+
'			height:auto !important;\n'+
'			display:block !important; \n'+
'		}\n'+
'		td[class="text-center"] {text-align:center !important;}\n'+
'		table[class="cta-button"],\n'+
'		table[class="cta-button mceNonEditable"] {\n'+
'			width: 100%;\n'+
'		}\n'+
'		td[class="mobileIcon"],\n'+
'		td[class="mobileIcon mceEditable"] {\n'+
'			width:60px !important;\n'+
'			padding: 6px 0 0 11px !important;\n'+
'			display:block !important;	\n'+
'		}\n'+
'		td[class="mobileIcon"] td,\n'+
'		td[class="mobileIcon mceEditable"] td {\n'+
'			text-align:left !important;\n'+
'		}\n'+
'		tr[data-section="link-list-alt"] td[class="mobileIcon"],\n'+
'		tr[data-section="link-list-alt"] td[class="mobileIcon mceEditable"] {\n'+
'			padding: 2px 0 0 7px !important;\n'+
'		}\n'+
'		td[data-section="ico-bullet"] img {\n'+
'			width:32px !important;\n'+
'			height:32px !important;\n'+
'		}\n'+
'		tr[data-section="partner_logos"] img {\n'+
'			margin-right: 30px;\n'+
'		}\n'+
'		tr[data-section="partner_logos"] td[class="mobile-inline"] {\n'+
'			margin: 0;\n'+
'		}\n'+
'		table[class="rs-bullet-table"],\n'+
'		table[class="rs-bullet-table mceNonEditable"] {\n'+
'			width: 100%;\n'+
'			margin-bottom: 26px;\n'+
'			border-bottom: 1px solid #DDDDDD;\n'+
'			padding-bottom: 26px;\n'+
'		}\n'+
'		table[class="rs-bullet-table"] + table[class="rs-bullet-table"],\n'+
'		table[class="rs-bullet-table mceNonEditable"] + table[class="rs-bullet-table mceNonEditable"] {\n'+
'			margin-top: 26px !important;\n'+
'		}\n'+
'		table[class="rs-bullet-table"] div[class="mobileBorder"],\n'+
'		table[class="rs-bullet-table mceNonEditable"] div[class="mobileBorder"] {\n'+
'			margin-top: 10px !important;\n'+
'		}\n'+
'		table[class="rs-bullet-table"] + table[class="rs-bullet-table"] div[class="mobileBorder"],\n'+
'		table[class="rs-bullet-table mceNonEditable"] + table[class="rs-bullet-table mceNonEditable"] div[class="mobileBorder"] {\n'+
'			display: none;\n'+
'		}\n'+
'		table[class="rs-bullet-table"]:only-of-type,\n'+
'		table[class="rs-bullet-table mceNonEditable"]:only-of-type {\n'+
'			margin-bottom: 0 !important;\n'+
'			border-bottom: none !important;\n'+
'		}\n'+
'		table[class="rs-bullet-table"]:only-of-type div[class="mobileBorder"],\n'+
'		table[class="rs-bullet-table mceNonEditable"]:only-of-type div[class="mobileBorder"] {\n'+
'			height: 0 !important;\n'+
'			margin: 0 !important;\n'+
'		}\n'+
'		td[class="callout-mobile-spacer"] {\n'+
'			height: 12px;\n'+
'			border-color: #DDDDDD !important;\n'+
'		}\n'+
'		a[class="font14"],\n'+
'		span[class="font14"] {\n'+
'			font-size: 14px !important;\n'+
'			line-height: 21px !important;\n'+
'			display: inline-block;\n'+
'		}\n'+
'		a[class="font16"],\n'+
'		span[class="font16"] {\n'+
'			font-size: 16px !important;\n'+
'			line-height: 19px !important;\n'+
'			display: inline-block;\n'+
'		}\n'+
'		a[class="font19"],\n'+
'		span[class="font19"] {\n'+
'			font-size: 19px !important;\n'+
'			line-height: 25px !important;\n'+
'			display: inline-block;\n'+
'		}\n'+
'		a[class="font22"],\n'+
'		span[class="font22"] {\n'+
'			font-size: 22px !important;\n'+
'			line-height: 26px !important;\n'+
'			display: inline-block;\n'+
'		}\n'+
'		a[class="font30"],\n'+
'		span[class="font30"] {\n'+
'			font-size: 30px !important;\n'+
'			line-height: 34px !important;\n'+
'			display: inline-block;\n'+
'		}\n'+
'		table[class="widthAuto"],\n'+
'		table[class="widthAuto mceEditable"],\n'+
'		td[class="widthAuto"],\n'+
'		td[class="widthAuto mceEditable"] {\n'+
'			width: auto !important;\n'+
'			height: 34px !important;\n'+
'			min-width: 124px !important;\n'+
'			padding:0 15px !important;\n'+
'		}\n'+
'		td[class="width10"] {width:10px !important;}\n'+
'		td[class="width20"] {width:20px !important;}\n'+
'		td[class="width40"] {width:40px !important;}\n'+
'		td[class="width71"] {width:71px !important;}\n'+
'		td[class="height1"] {height:1px !important;}\n'+
'		td[class="height5"] {height:5px !important;}\n'+
'		td[class="height10"] {height:10px !important;}\n'+
'		td[class="height15"] {height:15px !important;}\n'+
'		td[class="height20"] {height:20px !important;}\n'+
'		td[class="height25"] {height:25px !important;}\n'+
'		td[class="height28"] {height:28px !important;}\n'+
'		td[class="height30"] {height:30px !important;}\n'+
'		td[class="mobile-block"],\n'+
'		td[class="mobile-block mceEditable"] {\n'+
'			width:100% !important;\n'+
'			display:block !important;\n'+
'			padding-top:20px !important;\n'+
'			min-height:50px !important;\n'+
'		}\n'+
'		td[class="mobile-block2"],\n'+
'		td[class="mobile-block2 mceEditable"] {\n'+
'			width:100% !important;\n'+
'			display:block !important;\n'+
'		}\n'+
'		td[class="mobile-block2-img-flex"],\n'+
'		td[class="mobile-block2-img-flex mceEditable"] {\n'+
'			width:100% !important;\n'+
'			display:block !important;\n'+
'		}\n'+
'		td[class="mobile-block2-img-flex"] img,\n'+
'		td[class="mobile-block2-img-flex mceEditable"] img {\n'+
'			width:100% !important;\n'+
'			height:auto !important;\n'+
'			display:block !important;\n'+
'		}\n'+
'		td[class="mobile-inline"],\n'+
'		td[class="mobile-inline mceEditable"] {\n'+
'			display:inline-block !important;\n'+
'			margin: 5px 10px 10px;\n'+
'		}\n'+
'		td[class="mobile-text-left"],\n'+
'		td[class="mobile-text-left mceEditable"] {\n'+
'			text-align: left !important;\n'+
'		}\n'+
'		td[class="mobile-text-right"],\n'+
'		td[class="mobile-text-right mceEditable"] {\n'+
'			text-align: right !important;\n'+
'		}\n'+
'		td[class="mobile-text-center"],\n'+
'		td[class="mobile-text-center mceEditable"] {\n'+
'			text-align: center !important;\n'+
'		}\n'+
'		tr[class="icon-row"] {\n'+
'			width:100% !important;\n'+
'			margin-left: 71px;\n'+
'			float: none;\n'+
'			width: auto !important;\n'+
'			display: block;\n'+
'		}\n'+
'		tr[class="icon-row"] td[class="icon-container"],\n'+
'		tr[class="icon-row"] td[class="icon-container mceEditable"] {\n'+
'			position: absolute;\n'+
'			margin: 4px 0 0 -64px;\n'+
'			text-align: left !important;\n'+
'		}\n'+
'		tr[class="icon-row"] td[class="icon-container"] img,\n'+
'		tr[class="icon-row"] td[class="icon-container mceEditable"] img {\n'+
'			max-width: 54px;\n'+
'			height: auto;\n'+
'		}\n'+
'		td[class="image-r-text"],\n'+
'		td[class="image-r-text mceEditable"] {\n'+
'			float: right;\n'+
'		}\n'+
'		tr[class="motion-row"],\n'+
'		tr[class="motion-icon-row"] {\n'+
'			background-color: #222222;\n'+
'		}\n'+
'		tr[class="motion-icon-row"] td[class="motion-icon"] img {\n'+
'			width: 80%;\n'+
'			max-width: 128px;\n'+
'			height: auto;\n'+
'		}\n'+
'		td[class="footer-text-label"] {\n'+
'			width: 100% !important;\n'+
'			display: block !important;\n'+
'			padding: 0 0 10px !important;\n'+
'			text-align: left !important;\n'+
'		}\n'+
'		td[class="footer-responsive-block"] {\n'+
'			display: inline-block !important;\n'+
'			width: 100%;\n'+
'			padding-bottom: 20px;\n'+
'			text-align: left;\n'+
'		}\n'+
'		td[class="responsive-links-block"] {\n'+
'			display: inline-block !important;\n'+
'			width: 100% !important;\n'+
'			float: none !important;\n'+
'			padding: 0 !important;\n'+
'		}\n'+
'		td[class="links-block"] {\n'+
'			padding-top: 0 !important;\n'+
'		}\n'+
'		td[class="footer-link-wrap"] {\n'+
'			margin: 0 !important;\n'+
'		}\n'+
'		td[class="footer-spacer-cell"] {\n'+
'			width: 20px !important;\n'+
'		}\n'+
'		td[class="footer-spacer-cell"] table {\n'+
'			width: 20px !important;\n'+
'		}\n'+
'		td[class="footer-social-wrapper"] {\n'+
'			padding-top: 0 !important;\n'+
'			border: none !important;\n'+
'		}\n'+
'		td[class="footer-social-holder"] {\n'+
'			display: block !important;\n'+
'			width: 100% !important;\n'+
'			margin-top: -120px;\n'+
'			padding-bottom: 50px;\n'+
'			text-align: left !important;\n'+
'		}\n'+
'		td[class="footer-links-cell"] {\n'+
'			width: 100% !important;\n'+
'			display: block !important;\n'+
'		}\n'+
'		td[class="footer-logo-holder"] {\n'+
'			display: block !important;\n'+
'			width: 100% !important;\n'+
'			padding-top: 100px !important;\n'+
'		}\n'+
'		td[class="footer-logo-holder-no-social"] {\n'+
'			display: block !important;\n'+
'			width: 100% !important;\n'+
'			padding-top: 15px !important;\n'+
'		}\n'+
'		div[class="footer-social-links"] {\n'+
'			float: none !important;\n'+
'			width: 100%;\n'+
'			margin-left: 0 !important;\n'+
'			margin-right: 0 !important;\n'+
'			padding-bottom: 15px;\n'+
'			border-bottom-style: solid;\n'+
'			border-width: 1px;\n'+
'			border-color: #555555;\n'+
'		}\n'+
'		div[class="footer-logo"] {\n'+
'			float: none !important;\n'+
'			display: inline-block !important;\n'+
'			width: 100%;\n'+
'		}\n'+
'		div[class="footer-logo"] img {\n'+
'			height: 32px !important;\n'+
'			max-width: 250px !important;\n'+
'		}\n'+
'		div[class="footer-link"] {\n'+
'			border-bottom-style: solid;\n'+
'			border-width: 1px;\n'+
'			border-color: #555555;\n'+
'			padding-top: 15px !important;\n'+
'			padding-bottom: 15px !important;\n'+
'		}\n'+
'	}\n'+
'	</style>\n'+
'</head>\n'+
'<body style="margin:0; padding:0;" bgcolor="#ffffff" link="#008cd2">\n'+
'\n'+
'\n'+
'<div style="display:none;" class="sapMktBlock" data-sap-hpa-ceimo-block-type="TEXT" data-sap-hpa-ceimo-block-editable="X"><table width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff">\n'+
'	<tbody><tr>\n'+
'		<td style="font-size:1px;color:#FFFFFF;">\n'+
'			<font color="#FFFFFF" style="font-size:1px;color:#FFFFFF;line-height:0;">\n'+
'			<!-- inbox preview optimized text -->\n'+
'			<span class="appleLinksWhite">Main Headline Text Subheadline Text with gold emphasis</span>\n'+
'			</font>\n'+
'		</td>\n'+
'	</tr>\n'+
'</tbody></table></div><!-- /#sapMktBlock -->\n'+
'\n'+
'<div style="display:none;" class="sapMktBlock" data-sap-hpa-ceimo-block-type="SUBJECT" data-sap-hpa-ceimo-block-editable="X"></div>\n'+
'\n'+
'\n'+
'<div class="sapMktBlock" data-sap-hpa-ceimo-block-type="TEXT" data-sap-hpa-ceimo-block-editable="X">\n'+
'\n'+
'<!-- main wrapper -->\n'+
'<table data-section="body" class="wrapper" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff">\n'+
'\n'+
'	<!-- header -->\n'+
'	<tbody><tr><td>\n'+
'	<table data-section="header" class="wrapper" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff">\n'+
'		<tbody><tr>\n'+
'			<td><table class="container header-container" title="header-container" width="640" align="center" cellpadding="0" cellspacing="0" bgcolor="#000000" style="margin:0 auto !important; padding:0 20px;">\n'+
'	<tbody><tr>\n'+
'		<td>\n'+
'			<table width="100%" cellspacing="0" cellpadding="0">\n'+
'				<tbody><tr><td height="17" class="height10" style="line-height:1px; font-size:1px;">&nbsp;</td></tr>\n'+
'				<tr>\n'+
'					<td>\n'+
'						<table width="100%" cellspacing="0" cellpadding="0" title="brand">\n'+
'							\n'+
'								<tbody><tr>\n'+
'									<td valign="middle" width="414" style="line-height:1px; font-size:1px;"></td>\n'+
'									<td valign="middle" align="right" width="104" style="line-height:1px; font-size:1px;"><a title="THE BEST RUN" href="https://www.sap.com" style="text-decoration:none;" target="_blank" rel="noopener noreferrer" data-sap-hpa-ceimo-link-alias="WEBSITE"><img src="https://fm.sap.com/images/2015/run-simple-email/TheBestRunLogo-64px-White-DG.png" alt="THE BEST RUN" border="0" hspace="0" vspace="0" width="104" height="32" title="tagline" style="vertical-align:top; width:104px; height:32px;"></a></td>\n'+
'									<td width="10" class="hide" style="line-height:1px; font-size:1px;">&nbsp;</td>\n'+
'									<td valign="middle" align="right" width="72" style="line-height:1px; font-size:1px;"><a title="SAP" href="https://www.sap.com" style="text-decoration:none;" target="_blank" rel="noopener noreferrer" data-sap-hpa-ceimo-link-alias="WEBSITE"><img src="https://fm.sap.com/images/2015/run-simple-email/logo.png" alt="SAP" border="0" hspace="0" vspace="0" width="72" height="36" title="logo" style="vertical-align:top; width:72px; height:36px;"></a></td>\n'+
'								</tr>\n'+
'							\n'+
'						</tbody></table>\n'+
'					</td>\n'+
'				</tr>\n'+
'				<tr><td height="17" class="height10" style="line-height:1px; font-size:1px;">&nbsp;</td></tr>\n'+
'			</tbody></table>\n'+
'		</td>\n'+
'	</tr>\n'+
'</tbody></table></td>\n'+
'		</tr>\n'+
'		<!--\n'+
'		<tr>\n'+
'			<td><table class="container header-container" width="640" align="center" bgcolor="#e9e9e9" cellspacing="0" cellpadding="0" style="margin:0 auto !important; padding:0 25px; min-width: 100%;">\n'+
'				<tr>\n'+
'					<td><table width="100%" cellspacing="0" cellpadding="0">\n'+
'						<tr>\n'+
'							<td align="left" valign="middle" height="25" style="font:11px Arial, Helvetica, sans-serif; color:#444444;">\n'+
'								<b><a title="Version Fran&ccedil;aise" style="text-decoration:none; color:#008cd2;" target="_blank" href="https://fm.sap.com/1mobile/placeholder.html">Version Fran&ccedil;aise</a></b>\n'+
'							</td>\n'+
'						</tr>\n'+
'					</table></td>\n'+
'				</tr>\n'+
'			</table></td>\n'+
'		</tr>\n'+
'		-->\n'+
'	</tbody></table></td></tr>\n'+
'	\n'+
'	<!-- main -->\n'+
'	<tr><td><table data-section="main" class="wrapper" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff">\n'+
'		<tbody><tr>\n'+
'			<td><table class="flexible" width="640" align="center" cellpadding="0" cellspacing="0" style="margin:0 auto !important;">\n'+
'\n'+
'<tbody><tr data-section="hero">\n'+
'	<td>\n'+
'		<table class="flexible" width="640" align="center" cellpadding="0" cellspacing="0" style="margin:0 auto !important;">\n'+
'			<tbody><tr class="motion-row">\n'+
'				<td valign="top" bgcolor="#222222"><table width="100%" cellspacing="0" cellpadding="0">\n'+
'					<tbody><tr><td colspan="3" style="line-height:1px; font-size:1px;" height="40">&nbsp;</td></tr>\n'+
'					<tr data-section="headline">\n'+
'						<td style="line-height:1px; font-size:1px;" width="25">&nbsp;</td>\n'+
'						<td align="left" style="font: 36px/42px Arial, Helvetica, sans-serif; color:#FFFFFF;">\n'+
'							<b>\n'+
'							<span class="font30">Main Headline Text</span>\n'+
'							</b>\n'+
'						</td>\n'+
'						<td style="line-height:1px; font-size:1px;" width="25">&nbsp;</td>\n'+
'					</tr>\n'+
'					\n'+
'						<tr><td colspan="3" style="line-height:1px; font-size:1px;" height="5">&nbsp;</td></tr>\n'+
'						\n'+
'						<tr data-section="subhead">\n'+
'							<td style="line-height:1px; font-size:1px;" width="25">&nbsp;</td>\n'+
'							<td align="left" style="font:22px/30px Arial, Helvetica, sans-serif; color:#CCCCCC;">\n'+
'								<span class="font19">Subheadline Text with <span style="color:#f0ab00;">gold emphasis</span></span>\n'+
'							</td>\n'+
'							<td style="line-height:1px; font-size:1px;" width="25">&nbsp;</td>\n'+
'						</tr>\n'+
'					\n'+
'							<tr><td colspan="3" style="line-height:1px; font-size:1px;" height="15">&nbsp;</td></tr>\n'+
'						\n'+
'						<tr data-section="cta-button">\n'+
'							<td style="line-height:1px; font-size:1px;" width="25">&nbsp;</td>\n'+
'							<td align="left"><table class="cta-button mceNonEditable" border="0" cellspacing="0" cellpadding="0">\n'+
'<tbody>\n'+
'<tr>\n'+
'<td class="widthAuto mceEditable" align="center" valign="middle" bgcolor="#008fd3" width="252" height="40"><a target="_blank" class="font16" style="font: 18px/18px Arial, Helvetica, sans-serif; color: #ffffff; text-align: center; text-decoration: none; display: block; padding: 11px;" href="https://fm.sap.com/campaigns/XXXXXXX/index.html" data-sap-hpa-ceimo-link-alias="CTA">Register now</a></td>\n'+
'</tr>\n'+
'</tbody>\n'+
'</table></td>\n'+
'							<td style="line-height:1px; font-size:1px;" width="25">&nbsp;</td>\n'+
'						</tr>\n'+
'					\n'+
'					<tr><td colspan="3" style="line-height:1px; font-size:1px;" height="35">&nbsp;</td></tr>\n'+
'				</tbody></table></td>\n'+
'			</tr>\n'+
'		</tbody></table>\n'+
'	</td>\n'+
'</tr>\n'+
'					</tbody></table>\n'+
'					<table class="container" width="640" align="center" cellpadding="0" cellspacing="0" style="margin:0 auto !important; padding:0 20px;">\n'+
'					<!-- email body -->\n'+
'					<tbody><tr>\n'+
'						<td>\n'+
'							<table width="100%" cellspacing="0" cellpadding="0">\n'+
'								<tbody><tr><td height="30" class="height20" style="line-height:1px; font-size:1px;">&nbsp;</td></tr>\n'+
'								<tr data-section="content">\n'+
'									<td>\n'+
'										<table width="100%" cellspacing="0" cellpadding="0">\n'+
'											<tbody><tr>\n'+
'												<td style="font:14px/21px Arial, Helvetica, sans-serif; color:#444444;">\n'+
'\n'+
'\n'+
'<p><strong>Dear Colleague,</strong></p>\n'+
'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec adipiscing ligula. Nunc ac eros nunc. Praesent tincidunt eleifend pretium. Nulla quam mi, imperdiet a facilisis nec, dapibus vel felis. Sed vel mattis eros. Sed porta elit et lorem consequat dignissim. Mauris augue mauris, cursus id congue at, tincidunt sit amet tortor. Donec ut massa eu sapien condimentum aliquet malesuada sed dolor.</p>\n'+
'<font color="#333333" face="Arial, Helvetica, sans-serif" style="font-size:18px; line-height:22px;"><p><b>Subheading Number One</b></p></font>\n'+
'<p>Nam adipiscing tincidunt neque, id lacinia risus rhoncus nec. Vestibulum odio elit, auctor at sollicitudin sit amet, luctus sit amet magna. Curabitur lacinia porttitor mattis. Etiam nec est eget diam tincidunt vehicula ac eget neque. Maecenas cursus volutpat interdum. Nam ac odio elit, sed iaculis quam. Proin fringilla dignissim sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n'+
'<p>Regards,</p>\n'+
'<p><strong>SAP</strong></p>\n'+
'\n'+
'\n'+
'												</td>\n'+
'											</tr>\n'+
'										</tbody></table>\n'+
'									</td>\n'+
'								</tr>\n'+
'								<tr><td height="35" class="height28" style="line-height:1px; font-size:1px;">&nbsp;</td></tr>\n'+
'							</tbody></table>\n'+
'\n'+
'						</td>\n'+
'					</tr>\n'+
'				</tbody></table>\n'+
'			</td>\n'+
'		</tr>\n'+
'		<tr><td><div style="display:none; white-space:nowrap; font:15px/2px courier; color:#ffffff;">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</div></td></tr>\n'+
'		\n'+
'	</tbody></table></td></tr>\n'+
'	\n'+
'	<!-- footer -->\n'+
'	<tr><td><table data-section="footer" class="wrapper" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff">\n'+
'		<tbody><tr data-section="footer-top">\n'+
'			<td>\n'+
'<table class="flexible" width="640" align="center" style="margin: 0px auto; padding: 0px; line-height: normal; font-size: medium;" border="0" cellspacing="0" cellpadding="0">\n'+
'	<tbody>\n'+
'		<tr>\n'+
'			<td width="100%" height="30" style="width: 100%; height: 30px;" bgcolor="#222222" colspan="3">&nbsp;</td>\n'+
'		</tr>\n'+
'		<tr>\n'+
'			<td width="25" class="footer-spacer-cell" bgcolor="#222222" valign="bottom">\n'+
'				<table width="25" style="margin: 0px auto; padding: 0px;" border="0" cellspacing="0" cellpadding="0">\n'+
'					<tbody>\n'+
'						<tr>\n'+
'							<td>&nbsp;</td>\n'+
'						</tr>\n'+
'					</tbody>\n'+
'				</table>\n'+
'			</td>\n'+
'			<td width="100%" bgcolor="#222222">\n'+
'				<table width="100%" style="margin: 0px; padding: 0px;" border="0" cellspacing="0" cellpadding="0">\n'+
'					<tbody>\n'+
'						<tr>\n'+
'							<td width="66%" class="footer-responsive-block" valign="top" style="padding-bottom: 25px;">\n'+
'								<table width="100%" style="margin: 0px; padding: 0px;" border="0" cellspacing="0" cellpadding="0">\n'+
'									<tbody>\n'+
'										<tr data-section="connect-link">\n'+
'											<td width="32" valign="top"><span> <img width="32" alt="Call us" src="https://fm.sap.com/images/2015/run-simple-email/footer/281519-pictogram-neg-orange-trimmed-64w.png" height="45"> </span></td>\n'+
'											<td width="10" valign="top">&nbsp;</td>\n'+
'											<td valign="top">\n'+
'												<div style="color: rgb(153, 153, 153); line-height: 1.25; font-family: Arial,Helvetica,sans-serif; font-size: 14px;">\n'+
'												Global\n'+
'												</div>\n'+
'												\n'+
'												<div>\n'+
'												<a title="SAP phone number" class="no-underline" style="color: rgb(153, 153, 153); line-height: 1.2; font-family: Arial,Helvetica,sans-serif; font-size: 20px; font-weight: bold; text-decoration: none; white-space: nowrap;" target="_blank" rel="noopener noreferrer" href="tel:+ 1 800 872 1727" data-sap-hpa-ceimo-link-outboundid=" " data-sap-hpa-ceimo-link-utm=" " data-sap-hpa-ceimo-link-trackable=" "> <span style="color: rgb(153, 153, 153); line-height: 1.2; font-family: Arial,Helvetica,sans-serif; font-size: 20px; font-weight: bold; text-decoration: none; white-space: nowrap;">\n'+
'												+ 1 800 872 1727\n'+
'												</span> </a></div>\n'+
'												\n'+
'												<div class="country-list" style="color: rgb(153, 153, 153); line-height: 1.25; font-family: Arial,Helvetica,sans-serif; font-size: 14px;">\n'+
'												Or see our complete list of <a href="https://www.sap.com/corporate/en/company/office-locations.html" target="_modal" data-sap-hpa-ceimo-link-alias="CONTACT" style="text-decoration: underline;color:#999999;">local country numbers</a>\n'+
'												</div>\n'+
'											</td>\n'+
'										</tr>\n'+
'									</tbody>\n'+
'								</table>\n'+
'							</td>\n'+
'							<td width="33%" class="footer-responsive-block" valign="top" style="padding-bottom: 25px;">\n'+
'								<table style="margin: 0px; padding: 0px;" border="0" cellspacing="0" cellpadding="0">\n'+
'									<tbody>\n'+
'										<tr data-section="contact-us-link">\n'+
'											<td width="32" valign="top"><span> <img width="32" alt="Contact us" src="https://fm.sap.com/images/2015/run-simple-email/footer/281022-pictogram-neg-purple-trimmed-64w.png" height="22"> </span></td>\n'+
'											<td width="10" valign="top">&nbsp;</td>\n'+
'											<td valign="middle">\n'+
'												<div style="color: rgb(153, 153, 153); line-height: 1.25; font-family: Arial,Helvetica,sans-serif; font-size: 14px;"><a title="Contact SAP" class="no-underline" style="color: rgb(153, 153, 153); line-height: 1.25; font-family: Arial,Helvetica,sans-serif; font-size: 14px; text-decoration: none;" href="https://www.sap.com/registration/contact.html" data-sap-hpa-ceimo-link-alias="CONTACT">\n'+
'												Contact Us\n'+
'												</a></div>\n'+
'											</td>\n'+
'										</tr>\n'+
'									</tbody>\n'+
'								</table>\n'+
'							</td>\n'+
'						</tr>\n'+
'					</tbody>\n'+
'				</table>\n'+
'			</td>\n'+
'			<td width="25" class="footer-spacer-cell" bgcolor="#222222" valign="bottom">\n'+
'				<table width="25" style="margin: 0px auto; padding: 0px;" border="0" cellspacing="0" cellpadding="0">\n'+
'					<tbody>\n'+
'						<tr>\n'+
'							<td>&nbsp;</td>\n'+
'						</tr>\n'+
'					</tbody>\n'+
'				</table>\n'+
'			</td>\n'+
'		</tr>\n'+
'		<tr>\n'+
'			<td width="25" class="footer-spacer-cell" bgcolor="#222222" valign="bottom">\n'+
'				<table width="25" style="margin: 0px auto; padding: 0px;" border="0" cellspacing="0" cellpadding="0">\n'+
'					<tbody>\n'+
'						<tr>\n'+
'							<td>&nbsp;</td>\n'+
'						</tr>\n'+
'					</tbody>\n'+
'				</table>\n'+
'			</td>\n'+
'			<td width="100%" bgcolor="#222222">\n'+
'				<table width="100%" style="margin: 0px; padding: 0px;" border="0" cellspacing="0" cellpadding="0">\n'+
'					<tbody>\n'+
'						<tr>\n'+
'							<td class="links-block" style="padding-top: 20px;border-width: 1px; border-color: rgb(85, 85, 85); border-top-style: solid;">\n'+
'								<table width="100%" style="margin: 0px; padding: 0px;" border="0" cellspacing="0" cellpadding="0">\n'+
'									<tbody>\n'+
'										<tr>\n'+
'											<td width="33%" class="responsive-links-block" style="padding-bottom: 20px;">\n'+
'												<div class="footer-link" style="color: rgb(153, 153, 153); line-height: 1.25; font-family: Arial,Helvetica,sans-serif; font-size: 14px;"><a title="Unsubscribe" class="no-underline" style="color: rgb(153, 153, 153); line-height: 1.25; font-family: Arial,Helvetica,sans-serif; font-size: 14px; font-weight: bold; text-decoration: none;" href="https://www.sap.com/profile/unsubscribe.html?subscriptionID=1B04CC77-4253-41A8-A7CD-0809D8E1C32A" target="_blank" rel="noopener noreferrer" data-sap-hpa-ceimo-link-alias="UNSUBSCRIBE">\n'+
'												Unsubscribe\n'+
'												</a></div>\n'+
'											</td>\n'+
'											<td width="33%" class="responsive-links-block" style="padding-bottom: 20px;">\n'+
'												<div class="footer-link" style="color: rgb(153, 153, 153); line-height: 1.25; font-family: Arial,Helvetica,sans-serif; font-size: 14px;"><a title="Subscribe" class="no-underline" style="color: rgb(153, 153, 153); line-height: 1.25; font-family: Arial,Helvetica,sans-serif; font-size: 14px; font-weight: bold; text-decoration: none;" href="https://www.sap.com/us-emea/optin" target="_blank" rel="noopener noreferrer" data-sap-hpa-ceimo-link-alias="OTHER">\n'+
'												Subscribe\n'+
'												</a></div>\n'+
'											</td>\n'+
'											<td width="33%" class="responsive-links-block" style="padding-bottom: 20px;">\n'+
'												<div class="footer-link" style="color: rgb(153, 153, 153); line-height: 1.25; font-family: Arial,Helvetica,sans-serif; font-size: 14px;"><a title="Copyright" class="no-underline" style="color: rgb(153, 153, 153); line-height: 1.25; font-family: Arial,Helvetica,sans-serif; font-size: 14px; font-weight: bold; text-decoration: none;" href="https://www.sap.com/copyright" target="_blank" rel="noopener noreferrer" data-sap-hpa-ceimo-link-alias="OTHER">\n'+
'												Copyright\n'+
'												</a></div>\n'+
'											</td>\n'+
'										</tr>\n'+
'										<tr>\n'+
'											<td width="33%" class="responsive-links-block" style="padding-bottom: 20px;">\n'+
'												<div class="footer-link" style="color: rgb(153, 153, 153); line-height: 1.25; font-family: Arial,Helvetica,sans-serif; font-size: 14px;"><a title="Privacy" class="no-underline" style="color: rgb(153, 153, 153); line-height: 1.25; font-family: Arial,Helvetica,sans-serif; font-size: 14px; font-weight: bold; text-decoration: none;" href="https://www.sap.com/privacy" target="_blank" rel="noopener noreferrer" data-sap-hpa-ceimo-link-alias="OTHER">\n'+
'												Privacy\n'+
'												</a></div>\n'+
'											</td>\n'+
'											<td width="33%" class="responsive-links-block" style="padding-bottom: 20px;">\n'+
'												<div class="footer-link" style="color: rgb(153, 153, 153); line-height: 1.25; font-family: Arial,Helvetica,sans-serif; font-size: 14px;"><a title="Legal Disclosure" class="no-underline" style="color: rgb(153, 153, 153); line-height: 1.25; font-family: Arial,Helvetica,sans-serif; font-size: 14px; font-weight: bold; text-decoration: none;" href="https://www.sap.com/gm-impressum" target="_blank" rel="noopener noreferrer" data-sap-hpa-ceimo-link-alias="OTHER">\n'+
'												Legal Disclosure\n'+
'												</a></div>\n'+
'											</td>\n'+
'											<td width="33%" class="responsive-links-block" style="padding-bottom: 20px;">\n'+
'												\n'+
'													<div class="footer-link" style="color: rgb(153, 153, 153); line-height: 1.25; font-family: Arial,Helvetica,sans-serif; font-size: 14px;"><a title="Visit SAP.com" class="no-underline" style="color: rgb(153, 153, 153); line-height: 1.25; font-family: Arial,Helvetica,sans-serif; font-size: 14px; font-weight: bold; text-decoration: none;" href="https://www.sap.com/" target="_blank" rel="noopener noreferrer" data-sap-hpa-ceimo-link-alias="WEBSITE">\n'+
'													Visit SAP.com\n'+
'													</a></div>\n'+
'												\n'+
'											</td>\n'+
'										</tr>\n'+
'									</tbody>\n'+
'								</table>\n'+
'							</td>\n'+
'						</tr>\n'+
'					</tbody>\n'+
'				</table>\n'+
'			</td>\n'+
'			<td width="25" class="footer-spacer-cell" bgcolor="#222222" valign="bottom">\n'+
'				<table width="25" style="margin: 0px auto; padding: 0px;" border="0" cellspacing="0" cellpadding="0">\n'+
'					<tbody>\n'+
'						<tr>\n'+
'							<td>&nbsp;</td>\n'+
'						</tr>\n'+
'					</tbody>\n'+
'				</table>\n'+
'			</td>\n'+
'		</tr>\n'+
'		\n'+
'			<tr>\n'+
'				<td width="25" class="footer-spacer-cell" bgcolor="#222222" valign="bottom">\n'+
'					<table width="25" style="margin: 0px auto; padding: 0px;" border="0" cellspacing="0" cellpadding="0">\n'+
'						<tbody>\n'+
'							<tr>\n'+
'								<td>&nbsp;</td>\n'+
'							</tr>\n'+
'						</tbody>\n'+
'					</table>\n'+
'				</td>\n'+
'				<td width="100%" bgcolor="#222222">\n'+
'					<table width="100%" style="margin: 0px; padding: 0px;" border="0" cellspacing="0" cellpadding="0">\n'+
'						<tbody>\n'+
'							<tr>\n'+
'								<td class="footer-social-wrapper" style="padding-top:25px; border-width: 1px; border-color: rgb(85, 85, 85); border-top-style: solid;">\n'+
'									<table width="100%" style="margin: 0px; padding: 0px;" border="0" cellspacing="0" cellpadding="0">\n'+
'										<tbody>\n'+
'											<tr>\n'+
'												<td width="33%" class="footer-logo-holder" valign="top">\n'+
'													\n'+
'														<div class="footer-logo"><a title="SAP" href="https://www.sap.com" data-sap-hpa-ceimo-link-alias="WEBSITE"><img class="image" alt="SAP" src="https://fm.sap.com/images/2015/run-simple-email/footer/TheBestRunLogo-32px-WhiteTransparent-DG.png" width="178" height="32" border="0"> </a></div>\n'+
'													\n'+
'												</td>\n'+
'												\n'+
'													<td class="footer-social-holder" valign="middle" style="text-align: right;">\n'+
'														<div class="footer-social-links">\n'+
'															<table width="100%" style="padding: 0px;" border="0" cellspacing="0" cellpadding="0">\n'+
'																<tbody>\n'+
'																	<tr>\n'+
'																		<td class="footer-text-label" valign="middle" style="text-align: right; padding-right: 10px;"><span style="color: rgb(153, 153, 153); line-height: 1.25; font-family: Arial,Helvetica,sans-serif; font-size: 14px; white-space: nowrap;">\n'+
'																		Find us on\n'+
'																		</span></td>\n'+
'																		<td width="1%" class="footer-links-cell" valign="top" style="white-space: nowrap;"><table style="padding: 0px;" border="0" cellspacing="0" cellpadding="0"><tbody><tr data-section="social">\n'+
'\n'+
'<td style="font-size:1px;" width="26"><span class="footer-link-wrap" style="width: 26px; height: 26px; vertical-align: top; display: inline-block;"><a title="Facebook" style="width: 26px; height: 26px; text-decoration: none !important; vertical-align: top; display: inline-block;" href="https://www.facebook.com/SAP" target="_blank" rel="noopener noreferrer" data-sap-hpa-ceimo-link-alias="SOCIAL"><img width="26" height="26" style="border: 0px currentColor; border-image: none; width: 26px; height: 26px; line-height: 100%; text-decoration: none; display: block;" alt="Facebook" src="https://fm.sap.com/images/2015/run-simple-email/footer/icon-2018-facebook-email.jpg" border="0"></a></span></td>\n'+
'<td class="footer-spacer-cell" style="line-height:1px; font-size:10px;">&nbsp;&nbsp;&nbsp;</td>\n'+
'<td style="font-size:1px;" width="26"><span class="footer-link-wrap" style="width: 26px; height: 26px; vertical-align: top; display: inline-block;"><a title="Twitter" style="width: 26px; height: 26px; text-decoration: none !important; vertical-align: top; display: inline-block;" href="https://twitter.com/sap" target="_self" data-sap-hpa-ceimo-link-alias="SOCIAL"><img width="26" height="26" style="border: 0px currentColor; border-image: none; width: 26px; height: 26px; line-height: 100%; text-decoration: none; display: block;" alt="Twitter" src="https://fm.sap.com/images/2015/run-simple-email/footer/icon-2018-twitter-email.jpg" border="0"></a></span></td>\n'+
'<td class="footer-spacer-cell" style="line-height:1px; font-size:10px;">&nbsp;&nbsp;&nbsp;</td>\n'+
'<td style="font-size:1px;" width="26"><span class="footer-link-wrap" style="width: 26px; height: 26px; vertical-align: top; display: inline-block;"><a title="YouTube" style="width: 26px; height: 26px; text-decoration: none !important; vertical-align: top; display: inline-block;" href="https://www.youtube.com/user/SAP" target="_blank" rel="noopener noreferrer" data-sap-hpa-ceimo-link-alias="SOCIAL"><img width="26" height="26" style="border: 0px currentColor; border-image: none; width: 26px; height: 26px; line-height: 100%; text-decoration: none; display: block;" alt="YouTube" src="https://fm.sap.com/images/2015/run-simple-email/footer/icon-2018-youtube-email.jpg" border="0"></a></span></td>\n'+
'<td class="footer-spacer-cell" style="line-height:1px; font-size:10px;">&nbsp;&nbsp;&nbsp;</td>\n'+
'<td style="font-size:1px;" width="26"><span class="footer-link-wrap" style="width: 26px; height: 26px; vertical-align: top; display: inline-block;"><a title="LinkedIn" style="width: 26px; height: 26px; text-decoration: none !important; vertical-align: top; display: inline-block;" href="https://www.linkedin.com/company/sap" target="_blank" rel="noopener noreferrer" data-sap-hpa-ceimo-link-alias="SOCIAL"><img width="26" height="26" style="border: 0px currentColor; border-image: none; width: 26px; height: 26px; line-height: 100%; text-decoration: none; display: block;" alt="LinkedIn" src="https://fm.sap.com/images/2015/run-simple-email/footer/icon-2018-linked-in-email.jpg" border="0"></a></span></td>\n'+
'\n'+
'																		</tr></tbody></table></td>\n'+
'																	</tr>\n'+
'																</tbody>\n'+
'															</table>\n'+
'														</div>\n'+
'													</td>\n'+
'												\n'+
'											</tr>\n'+
'										</tbody>\n'+
'									</table>\n'+
'								</td>\n'+
'							</tr>\n'+
'						</tbody>\n'+
'					</table>\n'+
'				</td>\n'+
'				<td width="25" class="footer-spacer-cell" bgcolor="#222222" valign="bottom">\n'+
'					<table width="25" style="margin: 0px auto; padding: 0px;" border="0" cellspacing="0" cellpadding="0">\n'+
'						<tbody>\n'+
'							<tr>\n'+
'								<td>&nbsp;</td>\n'+
'							</tr>\n'+
'						</tbody>\n'+
'					</table>\n'+
'				</td>\n'+
'			</tr>\n'+
'			<tr>\n'+
'				<td width="100%" height="30" class="bottom-spacer-height" style="width: 100%; height: 30px;" bgcolor="#222222" colspan="3">&nbsp;</td>\n'+
'			</tr>\n'+
'		\n'+
'	</tbody>\n'+
'</table>\n'+
'			</td>\n'+
'		</tr>\n'+
'		<tr data-section="footer-bottom">\n'+
'			<td>\n'+
'<table data-section="footer-bottom" class="container" width="640" align="center" cellpadding="0" cellspacing="0" style="margin:0 auto !important; padding:0 20px;">\n'+
'    <tbody><tr>\n'+
'        <td>\n'+
'            <table width="100%" cellspacing="0" cellpadding="0">\n'+
'                <tbody><tr><td height="25" style="line-height:1px; font-size:1px;">&nbsp;</td></tr>\n'+
'                <tr>\n'+
'                    <td style="font: 12px/18px Arial, Helvetica, sans-serif; color:#666666;">\n'+
'\n'+
'\n'+
'SAP Global Marketing, Inc., 10 Hudson Yards, New York, NY 10001, United States\n'+
'<br><br>\n'+
'This e-mail may contain trade secrets or privileged, undisclosed, or otherwise confidential information. If you have received this e-mail in error, you are hereby notified that any review, copying, or distribution of it is strictly prohibited. Please inform us immediately and destroy the original transmittal. Thank you for your cooperation.<br> <br> This email was sent to you by SAP Global Marketing, Inc. on behalf of the SAP Group of companies. If you would like to have more information about your Data Controller(s) please click here to contact <a rel="noopener noreferrer" href="mailto:webmaster@sap.com?subject=Information%20Request%20About%20Data%20Controller&amp;body=Please%20let%20me%20know%20who%20my%20data%20controller%20is%20/%20Bitte%20teilen%20Sie%20mir%20mit,%20wer%20für%20meine%20Daten%20verantwortlich%20ist." target="_blank" title="webmaster@sap.com" style="text-decoration:none; color: #008ed2;">webmaster@sap.com</a>.\n'+
'<br><br>\n'+
'This promotional e-mail was sent to <input class="sapHpaCeiSmoManagePlaceholder" title="Contact - Email Address" type="button" value="Email Address" data-sap-hpa-ceimo-attrib-pers="|%BO-CUAN_INTERACTION_CONTACT-SMTP_ADDR%|"> by SAP Global Marketing and provides information on SAP’s products and services that may be of interest to you. If you would prefer not to receive such e-mails from SAP in the future, please click on the <a href="https://www.sap.com/profile/unsubscribe.html?subscriptionID=1B04CC77-4253-41A8-A7CD-0809D8E1C32A" target="_blank" data-sap-hpa-ceimo-link-alias="UNSUBSCRIBE" style="text-decoration:none; color: #008ed2;">Unsubscribe link</a>.\n'+
'<br><br>\n'+
'To ensure you continue to receive SAP related information properly please add <a href="mailto:sap@mailsap.com" data-sap-hpa-ceimo-link-alias="OTHER" style="text-decoration:none; color: #008ed2;">sap@mailsap.com</a> to your address book or safe senders list. \n'+
'\n'+
'                    </td>\n'+
'                </tr>\n'+
'                <tr><td height="25" style="line-height:1px; font-size:1px;">&nbsp;</td></tr>\n'+
'            </tbody></table>\n'+
'        </td>\n'+
'    </tr>\n'+
'</tbody></table>\n'+
'			</td>\n'+
'		</tr>\n'+
'		\n'+
'	</tbody></table></td></tr>\n'+
'	\n'+
'</tbody></table>\n'+
'\n'+
'\n'+
'\n'+
'</div><!-- /#sapMktBlock -->\n'+
'\n'+
'\n'+
'</body></html>';

export default template1;