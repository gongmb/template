/* Author: 
Daniel ��czycki www.designsentry.com
*/

jQuery(document).ready(function($) {


	/* Controller js */
	if(!(jQuery.browser.msie && jQuery.browser.version<="8.0")){
	jQuery('body').prepend('<div id="controller"><h6>Color Grid!</h6><ul><h5>Black/White + Accents:</h5><li><a href="#" id="ctrl1"></a></li><li><a href="#" id="ctrl2"></a></li><li><a href="#" id="ctrl3"></a></li><li><a href="#" id="ctrl4"></a></li><li><a href="#" id="ctrl5"></a></li><li><a href="#" id="ctrl6"></a></li><li><a href="#" id="ctrl7"></a></li><h5>Negatives:</h5><li><a href="#" id="ctrl8"></a></li><li><a href="#" id="ctrl9"></a></li><li><a href="#" id="ctrl10"></a></li><li><a href="#" id="ctrl11"></a></li><h5>Totally black:</h5><li><a href="#" id="ctrl12"></a></li><li><a href="#" id="ctrl13"></a></li><li><a href="#" id="ctrl14"></a></li><li><a href="#" id="ctrl15"></a></li><li><a href="#" id="ctrl16"></a></li><li><a href="#" id="ctrl17"></a></li><li><a href="#" id="ctrl18"></a></li><h5>Whites:</h5><li><a href="#" id="ctrl19"></a></li><li><a href="#" id="ctrl20"></a></li><li><a href="#" id="ctrl21"></a></li><li><a href="#" id="ctrl22"></a></li><li><a href="#" id="ctrl23"></a></li><li><a href="#" id="ctrl24"></a></li><h5>Randomness:</h5><li><a href="#" id="ctrl25"></a></li><li><a href="#" id="ctrl26"></a></li><li><a href="#" id="ctrl27"></a></li><li><a href="#" id="ctrl28"></a></li><li><a href="#" id="ctrl29"></a></li><li><a href="#" id="ctrl30"></a></li><li><a href="#" id="ctrl31"></a></li><li><a href="#" id="ctrl32"></a></li><li><a href="#" id="ctrl33"></a></li><li><a href="#" id="ctrl34"></a></li><li><a href="#" id="ctrl35"></a></li><li><a href="#" id="ctrl36"></a></li><li><a href="#" id="ctrl37"></a></li><li><a href="#" id="ctrl38"></a></li><li><a href="#" id="ctrl39"></a></li><li><a href="#" id="ctrl40"></a></li><li><a href="#" id="ctrl41"></a></li><li><a href="#" id="ctrl42"></a></li><li><a href="#" id="ctrl43"></a></li><li><a href="#" id="ctrl44"></a></li><li><a href="#" id="ctrl45"></a></li><li><a href="#" id="ctrl46"></a></li><li><a href="#" id="ctrl47"></a></li><li><a href="#" id="ctrl48"></a></li><li><a href="#" id="ctrl49"></a></li><li><a href="#" id="ctrl50"></a></li><li><a href="#" id="ctrl51"></a></li><li><a href="#" id="ctrl52"></a></li><li><a href="#" id="ctrl53"></a></li><li><a href="#" id="ctrl54"></a></li><li><a href="#" id="ctrl55"></a></li><li><a href="#" id="ctrl56"></a></li><li><a href="#" id="ctrl57"></a></li><li><a href="#" id="ctrl58"></a></li><li><a href="#" id="ctrl59"></a></li><li><a href="#" id="ctrl60"></a></li></ul></div>');
	var controllerjs = jQuery('#controller');
	if(jQuery.cookie("controllercolor") == null){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/black_redaccents/style.css" type="text/css" />');
		accentColor = '#dc0000',
		contrastColor = '#0c0c0c',
		contrastColorLighter1 = '#181818',
		contrastColorLighter2 = '#3A3A3A',
		contrastColorDarker = '#000000',
		contrastColorText1 = '#FAFAFA',
		contrastColorText2 = '#CCCCCC',
		contrastColorText3 = '#808080',
		MainColorDarker1 = '#D0D3D9',
		MainColorDarker2 = '#b8babf',
		MainColorText1 = '#0c0c0c',
		MainColorListHover = '#000000',
		collageShadeMin = 70,
		collageShadeMax = 87;};
	if(jQuery.cookie("controllercolor") == 'black_redaccents'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/black_redaccents/style.css" type="text/css" />');
		accentColor = '#dc0000',
		contrastColor = '#0c0c0c',
		contrastColorLighter1 = '#181818',
		contrastColorLighter2 = '#3A3A3A',
		contrastColorDarker = '#000000',
		contrastColorText1 = '#FAFAFA',
		contrastColorText2 = '#CCCCCC',
		contrastColorText3 = '#808080',
		MainColorDarker1 = '#D0D3D9',
		MainColorDarker2 = '#b8babf',
		MainColorText1 = '#0c0c0c',
		MainColorListHover = '#000000',
		collageShadeMin = 70,
		collageShadeMax = 87;};
	if(jQuery.cookie("controllercolor") == 'black_yellowaccents'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/black_yellowaccents/style.css" type="text/css" />');
		accentColor = '#fac400',
		contrastColor = '#0c0c0c',
		contrastColorLighter1 = '#181818',
		contrastColorLighter2 = '#3A3A3A',
		contrastColorDarker = '#000000',
		contrastColorText1 = '#FAFAFA',
		contrastColorText2 = '#CCCCCC',
		contrastColorText3 = '#808080',
		MainColorDarker1 = '#D0D3D9',
		MainColorDarker2 = '#b8babf',
		MainColorText1 = '#0c0c0c',
		MainColorListHover = '#000000',
		collageShadeMin = 70,
		collageShadeMax = 87;};
	if(jQuery.cookie("controllercolor") == 'black_blueaccents'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/black_blueaccents/style.css" type="text/css" />');
		accentColor = '#0374FF',
		contrastColor = '#0c0c0c',
		contrastColorLighter1 = '#181818',
		contrastColorLighter2 = '#3A3A3A',
		contrastColorDarker = '#000000',
		contrastColorText1 = '#FAFAFA',
		contrastColorText2 = '#CCCCCC',
		contrastColorText3 = '#808080',
		MainColorDarker1 = '#D0D3D9',
		MainColorDarker2 = '#b8babf',
		MainColorText1 = '#0c0c0c',
		MainColorListHover = '#000000',
		collageShadeMin = 70,
		collageShadeMax = 87;};
	if(jQuery.cookie("controllercolor") == 'black_greenaccents'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/black_greenaccents/style.css" type="text/css" />');
		accentColor = '#5BAB00',
		contrastColor = '#0c0c0c',
		contrastColorLighter1 = '#181818',
		contrastColorLighter2 = '#3A3A3A',
		contrastColorDarker = '#000000',
		contrastColorText1 = '#FAFAFA',
		contrastColorText2 = '#CCCCCC',
		contrastColorText3 = '#808080',
		MainColorDarker1 = '#D0D3D9',
		MainColorDarker2 = '#b8babf',
		MainColorText1 = '#0c0c0c',
		MainColorListHover = '#000000',
		collageShadeMin = 70,
		collageShadeMax = 87;};
	if(jQuery.cookie("controllercolor") == 'black_orangeaccents'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/black_orangeaccents/style.css" type="text/css" />');
		accentColor = '#FF8B00',
		contrastColor = '#0c0c0c',
		contrastColorLighter1 = '#181818',
		contrastColorLighter2 = '#3A3A3A',
		contrastColorDarker = '#000000',
		contrastColorText1 = '#FAFAFA',
		contrastColorText2 = '#CCCCCC',
		contrastColorText3 = '#808080',
		MainColorDarker1 = '#D0D3D9',
		MainColorDarker2 = '#b8babf',
		MainColorText1 = '#0c0c0c',
		MainColorListHover = '#000000',
		collageShadeMin = 70,
		collageShadeMax = 87;};
	if(jQuery.cookie("controllercolor") == 'black_pinkaccents'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/black_pinkaccents/style.css" type="text/css" />');
		accentColor = '#FF00C4',
		contrastColor = '#0c0c0c',
		contrastColorLighter1 = '#181818',
		contrastColorLighter2 = '#3A3A3A',
		contrastColorDarker = '#000000',
		contrastColorText1 = '#FAFAFA',
		contrastColorText2 = '#CCCCCC',
		contrastColorText3 = '#808080',
		MainColorDarker1 = '#D0D3D9',
		MainColorDarker2 = '#b8babf',
		MainColorText1 = '#0c0c0c',
		MainColorListHover = '#000000',
		collageShadeMin = 70,
		collageShadeMax = 87;};
	if(jQuery.cookie("controllercolor") == 'black_violetaccents'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/black_violetaccents/style.css" type="text/css" />');
		accentColor = '#9F0FFF',
		contrastColor = '#0c0c0c',
		contrastColorLighter1 = '#181818',
		contrastColorLighter2 = '#3A3A3A',
		contrastColorDarker = '#000000',
		contrastColorText1 = '#FAFAFA',
		contrastColorText2 = '#CCCCCC',
		contrastColorText3 = '#808080',
		MainColorDarker1 = '#D0D3D9',
		MainColorDarker2 = '#b8babf',
		MainColorText1 = '#0c0c0c',
		MainColorListHover = '#000000',
		collageShadeMin = 70,
		collageShadeMax = 87;};
	if(jQuery.cookie("controllercolor") == 'bloody_mary'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/bloody_mary/style.css" type="text/css" />');
		accentColor = '#B2200C',
		contrastColor = '#520608',
		contrastColorLighter1 = '#5E070A',
		contrastColorLighter2 = '#6E080B',
		contrastColorDarker = '#470507',
		contrastColorText1 = '#f2f2f2',
		contrastColorText2 = '#E5E5E5',
		contrastColorText3 = '#D9D9D9',
		MainColorDarker1 = '#262626',
		MainColorDarker2 = '#3B3B3B',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 20,
		collageShadeMax = 37;};
	if(jQuery.cookie("controllercolor") == 'dark_navy'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/dark_navy/style.css" type="text/css" />');
		accentColor = '#445878',
		contrastColor = '#1C1D21',
		contrastColorLighter1 = '#31353D',
		contrastColorLighter2 = '#3F454F',
		contrastColorDarker = '#141417',
		contrastColorText1 = '#F2F2F2',
		contrastColorText2 = '#E8E8E8',
		contrastColorText3 = '#DBDBDB',
		MainColorDarker1 = '#DCDDE5',
		MainColorDarker2 = '#CBCCD4',
		MainColorText1 = '#191919',
		MainColorListHover = '#2B2B2B',
		collageShadeMin = 10,
		collageShadeMax = 27;};
	if(jQuery.cookie("controllercolor") == 'new_age'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/new_age/style.css" type="text/css" />');
		accentColor = '#F77A52',
		contrastColor = '#332532',
		contrastColorLighter1 = '#473747',
		contrastColorLighter2 = '#644D52',
		contrastColorDarker = '#261C26',
		contrastColorText1 = '#F2F2F2',
		contrastColorText2 = '#E8E8E8',
		contrastColorText3 = '#DBDBDB',
		MainColorDarker1 = '#BAB299',
		MainColorDarker2 = '#A8A18A',
		MainColorText1 = '#332532',
		MainColorListHover = '#332532',
		collageShadeMin = 30,
		collageShadeMax = 57;};
	if(jQuery.cookie("controllercolor") == 'negative_blue'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/negative_blue/style.css" type="text/css" />');
		accentColor = '#6A8E9E',
		contrastColor = '#D9D9D9',
		contrastColorLighter1 = '#CCCCCC',
		contrastColorLighter2 = '#BFBFBF',
		contrastColorDarker = '#E5E5E5',
		contrastColorText1 = '#0c0c0c',
		contrastColorText2 = '#191919',
		contrastColorText3 = '#292929',
		MainColorDarker1 = '#48606B',
		MainColorDarker2 = '#384B54',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 70,
		collageShadeMax = 87;};
	if(jQuery.cookie("controllercolor") == 'negative'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/negative/style.css" type="text/css" />');
		accentColor = '#6A8E9E',
		contrastColor = '#D9D9D9',
		contrastColorLighter1 = '#CCCCCC',
		contrastColorLighter2 = '#BFBFBF',
		contrastColorDarker = '#E5E5E5',
		contrastColorText1 = '#0c0c0c',
		contrastColorText2 = '#191919',
		contrastColorText3 = '#292929',
		MainColorDarker1 = '#474747',
		MainColorDarker2 = '#575757',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 70,
		collageShadeMax = 87;};
	if(jQuery.cookie("controllercolor") == 'negative_brown'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/negative_brown/style.css" type="text/css" />');
		accentColor = '#AB1A1A',
		contrastColor = '#D9D9D9',
		contrastColorLighter1 = '#CCCCCC',
		contrastColorLighter2 = '#BFBFBF',
		contrastColorDarker = '#E5E5E5',
		contrastColorText1 = '#0c0c0c',
		contrastColorText2 = '#191919',
		contrastColorText3 = '#292929',
		MainColorDarker1 = '#5E4E3A',
		MainColorDarker2 = '#705D46',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 70,
		collageShadeMax = 87;};
	if(jQuery.cookie("controllercolor") == 'negative_teal'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/negative_teal/style.css" type="text/css" />');
		accentColor = '#AB1A1A',
		contrastColor = '#D9D9D9',
		contrastColorLighter1 = '#CCCCCC',
		contrastColorLighter2 = '#BFBFBF',
		contrastColorDarker = '#E5E5E5',
		contrastColorText1 = '#0c0c0c',
		contrastColorText2 = '#191919',
		contrastColorText3 = '#292929',
		MainColorDarker1 = '#6B777D',
		MainColorDarker2 = '#7D8B91',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 70,
		collageShadeMax = 87;};
	if(jQuery.cookie("controllercolor") == '50s_chocolate'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/50s_chocolate/style.css" type="text/css" />');
		accentColor = '#A7C1D9',
		contrastColor = '#593325',
		contrastColorLighter1 = '#663B2B',
		contrastColorLighter2 = '#734230',
		contrastColorDarker = '#4C2C20',
		contrastColorText1 = '#F2EFDC',
		contrastColorText2 = '#E5E3D1',
		contrastColorText3 = '#D9D7C5',
		MainColorDarker1 = '#D9D3BA',
		MainColorDarker2 = '#C7C1AB',
		MainColorText1 = '#4A4C3E',
		MainColorListHover = '#575949',
		collageShadeMin = 30,
		collageShadeMax = 47;};
	if(jQuery.cookie("controllercolor") == 'totalblack_red'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/totalblack_red/style.css" type="text/css" />');
		accentColor = '#dc0000',
		contrastColor = '#0c0c0c',
		contrastColorLighter1 = '#181818',
		contrastColorLighter2 = '#3A3A3A',
		contrastColorDarker = '#000000',
		contrastColorText1 = '#F2EFDC',
		contrastColorText2 = '#E5E3D1',
		contrastColorText3 = '#D9D7C5',
		MainColorDarker1 = '#3A3A3A',
		MainColorDarker2 = '#313131',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 4,
		collageShadeMax = 21;};
	if(jQuery.cookie("controllercolor") == 'totalblack_yellow'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/totalblack_yellow/style.css" type="text/css" />');
		accentColor = '#fac400',
		contrastColor = '#0c0c0c',
		contrastColorLighter1 = '#181818',
		contrastColorLighter2 = '#3A3A3A',
		contrastColorDarker = '#000000',
		contrastColorText1 = '#F2EFDC',
		contrastColorText2 = '#E5E3D1',
		contrastColorText3 = '#D9D7C5',
		MainColorDarker1 = '#3A3A3A',
		MainColorDarker2 = '#313131',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 4,
		collageShadeMax = 21;};
	if(jQuery.cookie("controllercolor") == 'totalblack_blue'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/totalblack_blue/style.css" type="text/css" />');
		accentColor = '#0374FF',
		contrastColor = '#0c0c0c',
		contrastColorLighter1 = '#181818',
		contrastColorLighter2 = '#3A3A3A',
		contrastColorDarker = '#000000',
		contrastColorText1 = '#F2EFDC',
		contrastColorText2 = '#E5E3D1',
		contrastColorText3 = '#D9D7C5',
		MainColorDarker1 = '#3A3A3A',
		MainColorDarker2 = '#313131',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 4,
		collageShadeMax = 21;};
	if(jQuery.cookie("controllercolor") == 'totalblack_green'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/totalblack_green/style.css" type="text/css" />');
		accentColor = '#5BAB00',
		contrastColor = '#0c0c0c',
		contrastColorLighter1 = '#181818',
		contrastColorLighter2 = '#3A3A3A',
		contrastColorDarker = '#000000',
		contrastColorText1 = '#F2EFDC',
		contrastColorText2 = '#E5E3D1',
		contrastColorText3 = '#D9D7C5',
		MainColorDarker1 = '#3A3A3A',
		MainColorDarker2 = '#313131',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 4,
		collageShadeMax = 21;};
	if(jQuery.cookie("controllercolor") == 'totalblack_orange'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/totalblack_orange/style.css" type="text/css" />');
		accentColor = '#FF8B00',
		contrastColor = '#0c0c0c',
		contrastColorLighter1 = '#181818',
		contrastColorLighter2 = '#3A3A3A',
		contrastColorDarker = '#000000',
		contrastColorText1 = '#F2EFDC',
		contrastColorText2 = '#E5E3D1',
		contrastColorText3 = '#D9D7C5',
		MainColorDarker1 = '#3A3A3A',
		MainColorDarker2 = '#313131',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 4,
		collageShadeMax = 21;};
	if(jQuery.cookie("controllercolor") == 'totalblack_pink'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/totalblack_pink/style.css" type="text/css" />');
		accentColor = '#FF00C4',
		contrastColor = '#0c0c0c',
		contrastColorLighter1 = '#181818',
		contrastColorLighter2 = '#3A3A3A',
		contrastColorDarker = '#000000',
		contrastColorText1 = '#F2EFDC',
		contrastColorText2 = '#E5E3D1',
		contrastColorText3 = '#D9D7C5',
		MainColorDarker1 = '#3A3A3A',
		MainColorDarker2 = '#313131',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 4,
		collageShadeMax = 21;};
	if(jQuery.cookie("controllercolor") == 'totalblack_violet'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/totalblack_violet/style.css" type="text/css" />');
		accentColor = '#9F0FFF',
		contrastColor = '#0c0c0c',
		contrastColorLighter1 = '#181818',
		contrastColorLighter2 = '#3A3A3A',
		contrastColorDarker = '#000000',
		contrastColorText1 = '#F2EFDC',
		contrastColorText2 = '#E5E3D1',
		contrastColorText3 = '#D9D7C5',
		MainColorDarker1 = '#3A3A3A',
		MainColorDarker2 = '#313131',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 4,
		collageShadeMax = 21;};
	if(jQuery.cookie("controllercolor") == 'white_redaccents'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/white_redaccents/style.css" type="text/css" />');
		accentColor = '#AB1A1A',
		contrastColor = '#D9D9D9',
		contrastColorLighter1 = '#CCCCCC',
		contrastColorLighter2 = '#BFBFBF',
		contrastColorDarker = '#E5E5E5',
		contrastColorText1 = '#0c0c0c',
		contrastColorText2 = '#191919',
		contrastColorText3 = '#292929',
		MainColorDarker1 = '#D0D3D9',
		MainColorDarker2 = '#b8babf',
		MainColorText1 = '#0c0c0c',
		MainColorListHover = '#0c0c0c',
		collageShadeMin = 80,
		collageShadeMax = 97;};
	if(jQuery.cookie("controllercolor") == 'white_yellowaccents'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/white_yellowaccents/style.css" type="text/css" />');
		accentColor = '#fac400',
		contrastColor = '#D9D9D9',
		contrastColorLighter1 = '#CCCCCC',
		contrastColorLighter2 = '#BFBFBF',
		contrastColorDarker = '#E5E5E5',
		contrastColorText1 = '#0c0c0c',
		contrastColorText2 = '#191919',
		contrastColorText3 = '#292929',
		MainColorDarker1 = '#D0D3D9',
		MainColorDarker2 = '#b8babf',
		MainColorText1 = '#0c0c0c',
		MainColorListHover = '#0c0c0c',
		collageShadeMin = 80,
		collageShadeMax = 97;};
	if(jQuery.cookie("controllercolor") == 'white_blueaccents'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/white_blueaccents/style.css" type="text/css" />');
		accentColor = '#0068D3',
		contrastColor = '#D9D9D9',
		contrastColorLighter1 = '#CCCCCC',
		contrastColorLighter2 = '#BFBFBF',
		contrastColorDarker = '#E5E5E5',
		contrastColorText1 = '#0c0c0c',
		contrastColorText2 = '#191919',
		contrastColorText3 = '#292929',
		MainColorDarker1 = '#D0D3D9',
		MainColorDarker2 = '#b8babf',
		MainColorText1 = '#0c0c0c',
		MainColorListHover = '#0c0c0c',
		collageShadeMin = 80,
		collageShadeMax = 97;};
	if(jQuery.cookie("controllercolor") == 'white_greenaccents'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/white_greenaccents/style.css" type="text/css" />');
		accentColor = '#94CF06',
		contrastColor = '#D9D9D9',
		contrastColorLighter1 = '#CCCCCC',
		contrastColorLighter2 = '#BFBFBF',
		contrastColorDarker = '#E5E5E5',
		contrastColorText1 = '#0c0c0c',
		contrastColorText2 = '#191919',
		contrastColorText3 = '#292929',
		MainColorDarker1 = '#D0D3D9',
		MainColorDarker2 = '#b8babf',
		MainColorText1 = '#0c0c0c',
		MainColorListHover = '#0c0c0c',
		collageShadeMin = 80,
		collageShadeMax = 97;};
	if(jQuery.cookie("controllercolor") == 'white_orangeaccents'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/white_orangeaccents/style.css" type="text/css" />');
		accentColor = '#FF6A00',
		contrastColor = '#D9D9D9',
		contrastColorLighter1 = '#CCCCCC',
		contrastColorLighter2 = '#BFBFBF',
		contrastColorDarker = '#E5E5E5',
		contrastColorText1 = '#0c0c0c',
		contrastColorText2 = '#191919',
		contrastColorText3 = '#292929',
		MainColorDarker1 = '#D0D3D9',
		MainColorDarker2 = '#b8babf',
		MainColorText1 = '#0c0c0c',
		MainColorListHover = '#0c0c0c',
		collageShadeMin = 80,
		collageShadeMax = 97;};
	if(jQuery.cookie("controllercolor") == 'white_pinkaccents'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/white_pinkaccents/style.css" type="text/css" />');
		accentColor = '#FF00C4',
		contrastColor = '#D9D9D9',
		contrastColorLighter1 = '#CCCCCC',
		contrastColorLighter2 = '#BFBFBF',
		contrastColorDarker = '#E5E5E5',
		contrastColorText1 = '#0c0c0c',
		contrastColorText2 = '#191919',
		contrastColorText3 = '#292929',
		MainColorDarker1 = '#D0D3D9',
		MainColorDarker2 = '#b8babf',
		MainColorText1 = '#0c0c0c',
		MainColorListHover = '#0c0c0c',
		collageShadeMin = 80,
		collageShadeMax = 97;};
	if(jQuery.cookie("controllercolor") == 'neutral_blue'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/neutral_blue/style.css" type="text/css" />');
		accentColor = '#91AA9D',
		contrastColor = '#193441',
		contrastColorLighter1 = '#224859',
		contrastColorLighter2 = '#3E606F',
		contrastColorDarker = '#0F1F26',
		contrastColorText1 = '#F2F2F2',
		contrastColorText2 = '#E8E8E8',
		contrastColorText3 = '#DBDBDB',
		MainColorDarker1 = '#D1DBBD',
		MainColorDarker2 = '#BEC7AB',
		MainColorText1 = '#191919',
		MainColorListHover = '#0c0c0c',
		collageShadeMin = 23,
		collageShadeMax = 40;};
	if(jQuery.cookie("controllercolor") == 'royal_greys'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/royal_greys/style.css" type="text/css" />');
		accentColor = '#940500',
		contrastColor = '#272A2B',
		contrastColorLighter1 = '#52504F',
		contrastColorLighter2 = '#473B39',
		contrastColorDarker = '#1A1B1C',
		contrastColorText1 = '#FAFAFA',
		contrastColorText2 = '#CCCCCC',
		contrastColorText3 = '#808080',
		MainColorDarker1 = '#52504F',
		MainColorDarker2 = '#666362',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 10,
		collageShadeMax = 27;};
	if(jQuery.cookie("controllercolor") == 'violet_black_yellow'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/violet_black_yellow/style.css" type="text/css" />');
		accentColor = '#fac400',
		contrastColor = '#422A5C',
		contrastColorLighter1 = '#4B3069',
		contrastColorLighter2 = '#553778',
		contrastColorDarker = '#452D61',
		contrastColorText1 = '#f2f2f2',
		contrastColorText2 = '#E5E5E5',
		contrastColorText3 = '#D9D9D9',
		MainColorDarker1 = '#262626',
		MainColorDarker2 = '#3B3B3B',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 10,
		collageShadeMax = 27;};
	if(jQuery.cookie("controllercolor") == 'the_warning'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/the_warning/style.css" type="text/css" />');
		accentColor = '#B23F30',
		contrastColor = '#FABB00',
		contrastColorLighter1 = '#EDB200',
		contrastColorLighter2 = '#E0A800',
		contrastColorDarker = '#FFBF00',
		contrastColorText1 = '#0c0c0c',
		contrastColorText2 = '#1F1F1F',
		contrastColorText3 = '#303030',
		MainColorDarker1 = '#262626',
		MainColorDarker2 = '#3B3B3B',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 80,
		collageShadeMax = 97;};
	if(jQuery.cookie("controllercolor") == 'strawberry_chocolate'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/strawberry_chocolate/style.css" type="text/css" />');
		accentColor = '#FF8FB1',
		contrastColor = '#4E382F',
		contrastColorLighter1 = '#B29882',
		contrastColorLighter2 = '#CCB8A3',
		contrastColorDarker = '#402D26',
		contrastColorText1 = '#F2F2F2',
		contrastColorText2 = '#E8E8E8',
		contrastColorText3 = '#DBDBDB',
		MainColorDarker1 = '#C9AC93',
		MainColorDarker2 = '#998270',
		MainColorText1 = '#191919',
		MainColorListHover = '#191919',
		collageShadeMin = 40,
		collageShadeMax = 57;};
	if(jQuery.cookie("controllercolor") == 'saffron_umbrella'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/saffron_umbrella/style.css" type="text/css" />');
		accentColor = '#FFDA24',
		contrastColor = '#302B1D',
		contrastColorLighter1 = '#3D3725',
		contrastColorLighter2 = '#4A432D',
		contrastColorDarker = '#242016',
		contrastColorText1 = '#F2F2F2',
		contrastColorText2 = '#E8E8E8',
		contrastColorText3 = '#DBDBDB',
		MainColorDarker1 = '#D9D7D0',
		MainColorDarker2 = '#C7C5BF',
		MainColorText1 = '#302B1D',
		MainColorListHover = '#242016',
		collageShadeMin = 40,
		collageShadeMax = 57;};
	if(jQuery.cookie("controllercolor") == 'royal_reds'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/royal_reds/style.css" type="text/css" />');
		accentColor = '#940500',
		contrastColor = '#272A2B',
		contrastColorLighter1 = '#383737',
		contrastColorLighter2 = '#473B39',
		contrastColorDarker = '#1A1B1C',
		contrastColorText1 = '#FAFAFA',
		contrastColorText2 = '#CCCCCC',
		contrastColorText3 = '#808080',
		MainColorDarker1 = '#8C3A37',
		MainColorDarker2 = '#A34340',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 20,
		collageShadeMax = 37;};
	if(jQuery.cookie("controllercolor") == 'purple_siberia'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/purple_siberia/style.css" type="text/css" />');
		accentColor = '#76A0B0',
		contrastColor = '#35262D',
		contrastColorLighter1 = '#423038',
		contrastColorLighter2 = '#4F3943',
		contrastColorDarker = '#291D23',
		contrastColorText1 = '#F2F2F2',
		contrastColorText2 = '#E8E8E8',
		contrastColorText3 = '#DBDBDB',
		MainColorDarker1 = '#E8ECED',
		MainColorDarker2 = '#A4B7BB',
		MainColorText1 = '#291D23',
		MainColorListHover = '#A4B7BB',
		collageShadeMin = 20,
		collageShadeMax = 37;};
	if(jQuery.cookie("controllercolor") == 'pistacchio'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/pistacchio/style.css" type="text/css" />');
		accentColor = '#273C66',
		contrastColor = '#D2D9AF',
		contrastColorLighter1 = '#DEE5BA',
		contrastColorLighter2 = '#EBF2C4',
		contrastColorDarker = '#C6CCA5',
		contrastColorText1 = '#636653',
		contrastColorText2 = '#575948',
		contrastColorText3 = '#4A4C3E',
		MainColorDarker1 = '#E5DFC5',
		MainColorDarker2 = '#D9D3BA',
		MainColorText1 = '#4A4C3E',
		MainColorListHover = '#636654',
		collageShadeMin = 80,
		collageShadeMax = 97;};
	if(jQuery.cookie("controllercolor") == 'pink_black_yellow'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/pink_black_yellow/style.css" type="text/css" />');
		accentColor = '#fac400',
		contrastColor = '#8A3A68',
		contrastColorLighter1 = '#994074',
		contrastColorLighter2 = '#A6467E',
		contrastColorDarker = '#873966',
		contrastColorText1 = '#f2f2f2',
		contrastColorText2 = '#E5E5E5',
		contrastColorText3 = '#D9D9D9',
		MainColorDarker1 = '#262626',
		MainColorDarker2 = '#3B3B3B',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 60,
		collageShadeMax = 77;};
	if(jQuery.cookie("controllercolor") == 'navy_black_red'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/navy_black_red/style.css" type="text/css" />');
		accentColor = '#B2200C',
		contrastColor = '#263238',
		contrastColorLighter1 = '#2E3E45',
		contrastColorLighter2 = '#3A4E57',
		contrastColorDarker = '#202B30',
		contrastColorText1 = '#f2f2f2',
		contrastColorText2 = '#E5E5E5',
		contrastColorText3 = '#D9D9D9',
		MainColorDarker1 = '#262626',
		MainColorDarker2 = '#3B3B3B',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 20,
		collageShadeMax = 37;};
	if(jQuery.cookie("controllercolor") == 'navy_black_blue'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/navy_black_blue/style.css" type="text/css" />');
		accentColor = '#6A8E9E',
		contrastColor = '#263238',
		contrastColorLighter1 = '#2E3E45',
		contrastColorLighter2 = '#3A4E57',
		contrastColorDarker = '#202B30',
		contrastColorText1 = '#f2f2f2',
		contrastColorText2 = '#E5E5E5',
		contrastColorText3 = '#D9D9D9',
		MainColorDarker1 = '#262626',
		MainColorDarker2 = '#3B3B3B',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 20,
		collageShadeMax = 37;};
	if(jQuery.cookie("controllercolor") == 'invite'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/invite/style.css" type="text/css" />');
		accentColor = '#2CB888',
		contrastColor = '#252526',
		contrastColorLighter1 = '#313233',
		contrastColorLighter2 = '#3D3E40',
		contrastColorDarker = '#1B1B1C',
		contrastColorText1 = '#FAFAFA',
		contrastColorText2 = '#f1f1f1',
		contrastColorText3 = '#e1e1e1',
		MainColorDarker1 = '#E5BF81',
		MainColorDarker2 = '#CFAC74',
		MainColorText1 = '#E84C00',
		MainColorListHover = '#FC7B00',
		collageShadeMin = 20,
		collageShadeMax = 37;};
	if(jQuery.cookie("controllercolor") == 'interstate'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/interstate/style.css" type="text/css" />');
		accentColor = '#D97925',
		contrastColor = '#733614',
		contrastColorLighter1 = '#7F3B16',
		contrastColorLighter2 = '#A64914',
		contrastColorDarker = '#662F11',
		contrastColorText1 = '#F2F2F2',
		contrastColorText2 = '#E8E8E8',
		contrastColorText3 = '#DBDBDB',
		MainColorDarker1 = '#D9B54A',
		MainColorDarker2 = '#CCAA45',
		MainColorText1 = '#191919',
		MainColorListHover = '#2B2B2B',
		collageShadeMin = 20,
		collageShadeMax = 37;};
	if(jQuery.cookie("controllercolor") == 'grey_black_yellow'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/grey_black_yellow/style.css" type="text/css" />');
		accentColor = '#fac400',
		contrastColor = '#87776F',
		contrastColorLighter1 = '#948279',
		contrastColorLighter2 = '#A18D84',
		contrastColorDarker = '#7A6B64',
		contrastColorText1 = '#F2F2F2',
		contrastColorText2 = '#E8E8E8',
		contrastColorText3 = '#DBDBDB',
		MainColorDarker1 = '#262626',
		MainColorDarker2 = '#3B3B3B',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 20,
		collageShadeMax = 37;};
	if(jQuery.cookie("controllercolor") == 'green_black_yellow'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/green_black_yellow/style.css" type="text/css" />');
		accentColor = '#fac400',
		contrastColor = '#466626',
		contrastColorLighter1 = '#4F732A',
		contrastColorLighter2 = '#577F2F',
		contrastColorDarker = '#3F5C22',
		contrastColorText1 = '#F2F2F2',
		contrastColorText2 = '#E8E8E8',
		contrastColorText3 = '#DBDBDB',
		MainColorDarker1 = '#262626',
		MainColorDarker2 = '#3B3B3B',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 20,
		collageShadeMax = 37;};
	if(jQuery.cookie("controllercolor") == 'flickery'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/flickery/style.css" type="text/css" />');
		accentColor = '#E00069',
		contrastColor = '#242424',
		contrastColorLighter1 = '#404040',
		contrastColorLighter2 = '#4C4C4C',
		contrastColorDarker = '#242424',
		contrastColorText1 = '#FAFAFA',
		contrastColorText2 = '#f1f1f1',
		contrastColorText3 = '#e1e1e1',
		MainColorDarker1 = '#CCCCCC',
		MainColorDarker2 = '#B2B2B2',
		MainColorText1 = '#CC0066',
		MainColorListHover = '#3399FF',
		collageShadeMin = 70,
		collageShadeMax = 87;};
	if(jQuery.cookie("controllercolor") == 'flashy_orange'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/flashy_orange/style.css" type="text/css" />');
		accentColor = '#D2D904',
		contrastColor = '#EB8305',
		contrastColorLighter1 = '#F58905',
		contrastColorLighter2 = '#FF8F05',
		contrastColorDarker = '#E07D04',
		contrastColorText1 = '#F2F2F2',
		contrastColorText2 = '#E8E8E8',
		contrastColorText3 = '#DBDBDB',
		MainColorDarker1 = '#E5E5E5',
		MainColorDarker2 = '#D9D9D9',
		MainColorText1 = '#191919',
		MainColorListHover = '#2B2B2B',
		collageShadeMin = 70,
		collageShadeMax = 87;};
	if(jQuery.cookie("controllercolor") == 'flashy_green'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/flashy_green/style.css" type="text/css" />');
		accentColor = '#D2D904',
		contrastColor = '#93A603',
		contrastColorLighter1 = '#9EB204',
		contrastColorLighter2 = '#A9BF04',
		contrastColorDarker = '#889903',
		contrastColorText1 = '#F2F2F2',
		contrastColorText2 = '#E8E8E8',
		contrastColorText3 = '#DBDBDB',
		MainColorDarker1 = '#E5E5E5',
		MainColorDarker2 = '#D9D9D9',
		MainColorText1 = '#191919',
		MainColorListHover = '#2B2B2B',
		collageShadeMin = 70,
		collageShadeMax = 87;};
	if(jQuery.cookie("controllercolor") == 'eleanor'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/eleanor/style.css" type="text/css" />');
		accentColor = '#D48043',
		contrastColor = '#0C1C1F',
		contrastColorLighter1 = '#122A2E',
		contrastColorLighter2 = '#18383D',
		contrastColorDarker = '#0B1A1C',
		contrastColorText1 = '#FAFAFA',
		contrastColorText2 = '#f1f1f1',
		contrastColorText3 = '#e1e1e1',
		MainColorDarker1 = '#8C4338',
		MainColorDarker2 = '#783A30',
		MainColorText1 = '#593F34',
		MainColorListHover = '#292622',
		collageShadeMin = 70,
		collageShadeMax = 87;};
	if(jQuery.cookie("controllercolor") == 'eco_tree'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/eco_tree/style.css" type="text/css" />');
		accentColor = '#FFDA24',
		contrastColor = '#302B1D',
		contrastColorLighter1 = '#3D3725',
		contrastColorLighter2 = '#4A432D',
		contrastColorDarker = '#242016',
		contrastColorText1 = '#F2F2F2',
		contrastColorText2 = '#E8E8E8',
		contrastColorText3 = '#DBDBDB',
		MainColorDarker1 = '#91873C',
		MainColorDarker2 = '#827935',
		MainColorText1 = '#302B1D',
		MainColorListHover = '#302B1D',
		collageShadeMin = 20,
		collageShadeMax = 37;};
	if(jQuery.cookie("controllercolor") == 'dirty_orange'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/dirty_orange/style.css" type="text/css" />');
		accentColor = '#fac400',
		contrastColor = '#B06700',
		contrastColorLighter1 = '#A35F00',
		contrastColorLighter2 = '#965800',
		contrastColorDarker = '#B86B00',
		contrastColorText1 = '#F2F2F2',
		contrastColorText2 = '#E5E5E5',
		contrastColorText3 = '#D9D9D9',
		MainColorDarker1 = '#262626',
		MainColorDarker2 = '#3B3B3B',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 40,
		collageShadeMax = 57;};
	if(jQuery.cookie("controllercolor") == 'dark_nugget'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/dark_nugget/style.css" type="text/css" />');
		accentColor = '#BF8752',
		contrastColor = '#33302D',
		contrastColorLighter1 = '#403C38',
		contrastColorLighter2 = '#4C4843',
		contrastColorDarker = '#262422',
		contrastColorText1 = '#FAFAFA',
		contrastColorText2 = '#CCCCCC',
		contrastColorText3 = '#808080',
		MainColorDarker1 = '#704F30',
		MainColorDarker2 = '#63462B',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 40,
		collageShadeMax = 57;};
	if(jQuery.cookie("controllercolor") == 'chocolate_black'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/chocolate_black/style.css" type="text/css" />');
		accentColor = '#B2200C',
		contrastColor = '#472E29',
		contrastColorLighter1 = '#543630',
		contrastColorLighter2 = '#5E3D36',
		contrastColorDarker = '#382420',
		contrastColorText1 = '#f2f2f2',
		contrastColorText2 = '#E5E5E5',
		contrastColorText3 = '#D9D9D9',
		MainColorDarker1 = '#262626',
		MainColorDarker2 = '#3B3B3B',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 40,
		collageShadeMax = 57;};
	if(jQuery.cookie("controllercolor") == 'cherrycake'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/cherrycake/style.css" type="text/css" />');
		accentColor = '#B9121B',
		contrastColor = '#4C1B1B',
		contrastColorLighter1 = '#592020',
		contrastColorLighter2 = '#662525',
		contrastColorDarker = '#3D1616',
		contrastColorText1 = '#F2F2F2',
		contrastColorText2 = '#E8E8E8',
		contrastColorText3 = '#DBDBDB',
		MainColorDarker1 = '#BD8D46',
		MainColorDarker2 = '#A37A3C',
		MainColorText1 = '#191919',
		MainColorListHover = '#191919',
		collageShadeMin = 40,
		collageShadeMax = 57;};
	if(jQuery.cookie("controllercolor") == 'carrots'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/carrots/style.css" type="text/css" />');
		accentColor = '#BFB52A',
		contrastColor = '#F29727',
		contrastColorLighter1 = '#E58F25',
		contrastColorLighter2 = '#D98723',
		contrastColorDarker = '#FF9F29',
		contrastColorText1 = '#FAFAFA',
		contrastColorText2 = '#f1f1f1',
		contrastColorText3 = '#e1e1e1',
		MainColorDarker1 = '#BFB52A',
		MainColorDarker2 = '#718C35',
		MainColorText1 = '#BFB52A',
		MainColorListHover = '#718C35',
		collageShadeMin = 80,
		collageShadeMax = 97;};
	if(jQuery.cookie("controllercolor") == 'calm_grey'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/calm_grey/style.css" type="text/css" />');
		accentColor = '#5B7876',
		contrastColor = '#292929',
		contrastColorLighter1 = '#363636',
		contrastColorLighter2 = '#424242',
		contrastColorDarker = '#1C1C1C',
		contrastColorText1 = '#F2F2F2',
		contrastColorText2 = '#E8E8E8',
		contrastColorText3 = '#DBDBDB',
		MainColorDarker1 = '#E5E2D3',
		MainColorDarker2 = '#D9D6C7',
		MainColorText1 = '#191919',
		MainColorListHover = '#191919',
		collageShadeMin = 80,
		collageShadeMax = 97;};
	if(jQuery.cookie("controllercolor") == 'brown_style'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/brown_style/style.css" type="text/css" />');
		accentColor = '#FFDA24',
		contrastColor = '#302B1D',
		contrastColorLighter1 = '#3D3725',
		contrastColorLighter2 = '#4A432D',
		contrastColorDarker = '#242016',
		contrastColorText1 = '#F2F2F2',
		contrastColorText2 = '#E8E8E8',
		contrastColorText3 = '#DBDBDB',
		MainColorDarker1 = '#D9D7D0',
		MainColorDarker2 = '#C7C5BF',
		MainColorText1 = '#302B1D',
		MainColorListHover = '#302B1D',
		collageShadeMin = 30,
		collageShadeMax = 47;};
	if(jQuery.cookie("controllercolor") == 'brown_chocolate'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/brown_chocolate/style.css" type="text/css" />');
		accentColor = '#BF0436',
		contrastColor = '#0c0c0c',
		contrastColorLighter1 = '#181818',
		contrastColorLighter2 = '#3A3A3A',
		contrastColorDarker = '#000000',
		contrastColorText1 = '#FAFAFA',
		contrastColorText2 = '#CCCCCC',
		contrastColorText3 = '#808080',
		MainColorDarker1 = '#5E4E3A',
		MainColorDarker2 = '#705D46',
		MainColorText1 = '#F2CBA1',
		MainColorListHover = '#ffffff',
		collageShadeMin = 30,
		collageShadeMax = 47;};
	if(jQuery.cookie("controllercolor") == 'blue_shed'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/blue_shed/style.css" type="text/css" />');
		accentColor = '#B23F30',
		contrastColor = '#006391',
		contrastColorLighter1 = '#0070A3',
		contrastColorLighter2 = '#007AB2',
		contrastColorDarker = '#2C4F66',
		contrastColorText1 = '#F2F2F2',
		contrastColorText2 = '#E8E8E8',
		contrastColorText3 = '#DBDBDB',
		MainColorDarker1 = '#403C3A',
		MainColorDarker2 = '#4D4C54',
		MainColorText1 = '#ffffff',
		MainColorListHover = '#ffffff',
		collageShadeMin = 40,
		collageShadeMax = 57;};
	if(jQuery.cookie("controllercolor") == 'army'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/army/style.css" type="text/css" />');
		accentColor = '#C03000',
		contrastColor = '#40411E',
		contrastColorLighter1 = '#787746',
		contrastColorLighter2 = '#87864E',
		contrastColorDarker = '#32331D',
		contrastColorText1 = '#F2F2F2',
		contrastColorText2 = '#E8E8E8',
		contrastColorText3 = '#DBDBDB',
		MainColorDarker1 = '#A19B82',
		MainColorDarker2 = '#85806B',
		MainColorText1 = '#191919',
		MainColorListHover = '#191919',
		collageShadeMin = 10,
		collageShadeMax = 27;};
	if(jQuery.cookie("controllercolor") == 'black_brown'){jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/black_brown/style.css" type="text/css" />');
		accentColor = '#BF0436',
		contrastColor = '#0c0c0c',
		contrastColorLighter1 = '#181818',
		contrastColorLighter2 = '#3A3A3A',
		contrastColorDarker = '#000000',
		contrastColorText1 = '#FAFAFA',
		contrastColorText2 = '#CCCCCC',
		contrastColorText3 = '#808080',
		MainColorDarker1 = '#73553E',
		MainColorDarker2 = '#664B37',
		MainColorText1 = '#F2CBA1',
		MainColorListHover = '#F2CBA1',
		collageShadeMin = 10,
		collageShadeMax = 27;};

	controllerjs.find('#ctrl1').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/black_redaccents/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "black_redaccents");
	location.reload();
	});
	controllerjs.find('#ctrl2').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/black_yellowaccents/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "black_yellowaccents");
	location.reload();
	});
	controllerjs.find('#ctrl3').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/black_blueaccents/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "black_blueaccents");
	location.reload();
	});
	controllerjs.find('#ctrl4').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/black_greenaccents/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "black_greenaccents");
	location.reload();
	});
	controllerjs.find('#ctrl5').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/black_orangeaccents/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "black_orangeaccents");
	location.reload();
	});
	controllerjs.find('#ctrl6').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/black_pinkaccents/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "black_pinkaccents");
	location.reload();
	});
	controllerjs.find('#ctrl7').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/black_violetaccents/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "black_violetaccents");
	location.reload();
	});
	controllerjs.find('#ctrl8').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/negative/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "negative");
	location.reload();
	});
	controllerjs.find('#ctrl9').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/negative_blue/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "negative_blue");
	location.reload();
	});
	controllerjs.find('#ctrl10').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/negative_brown/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "negative_brown");
	location.reload();
	});
	controllerjs.find('#ctrl11').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/negative_teal/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "negative_teal");
	location.reload();
	});
	controllerjs.find('#ctrl12').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/totalblack_red/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "totalblack_red");
	location.reload();
	});
	controllerjs.find('#ctrl13').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/totalblack_yellow/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "totalblack_yellow");
	location.reload();
	});
	controllerjs.find('#ctrl14').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/totalblack_blue/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "totalblack_blue");
	location.reload();
	});
	controllerjs.find('#ctrl15').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/totalblack_green/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "totalblack_green");
	location.reload();
	});
	controllerjs.find('#ctrl16').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/totalblack_orange/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "totalblack_orange");
	location.reload();
	});
	controllerjs.find('#ctrl17').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/totalblack_pink/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "totalblack_pink");
	location.reload();
	});
	controllerjs.find('#ctrl18').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/totalblack_violet/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "totalblack_violet");
	location.reload();
	});
	controllerjs.find('#ctrl19').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/white_redaccents/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "white_redaccents");
	location.reload();
	});
	controllerjs.find('#ctrl20').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/white_yellowaccents/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "white_yellowaccents");
	location.reload();
	});
	controllerjs.find('#ctrl21').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/white_blueaccents/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "white_blueaccents");
	location.reload();
	});
	controllerjs.find('#ctrl22').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/white_greenaccents/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "white_greenaccents");
	location.reload();
	});
	controllerjs.find('#ctrl23').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/white_orangeaccents/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "white_orangeaccents");
	location.reload();
	});
	controllerjs.find('#ctrl24').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/white_pinkaccents/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "white_pinkaccents");
	location.reload();
	});
	controllerjs.find('#ctrl25').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/neutral_blue/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "neutral_blue");
	location.reload();
	});
	controllerjs.find('#ctrl26').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/royal_greys/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "royal_greys");
	location.reload();
	});
	controllerjs.find('#ctrl27').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/50s_chocolate/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "50s_chocolate");
	location.reload();
	});
	controllerjs.find('#ctrl28').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/bloody_mary/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "bloody_mary");
	location.reload();
	});
	controllerjs.find('#ctrl29').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/dark_navy/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "dark_navy");
	location.reload();
	});
	controllerjs.find('#ctrl30').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/new_age/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "new_age");
	location.reload();
	});
	controllerjs.find('#ctrl31').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/violet_black_yellow/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "violet_black_yellow");
	location.reload();
	});
	controllerjs.find('#ctrl32').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/the_warning/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "the_warning");
	location.reload();
	});
	controllerjs.find('#ctrl33').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/strawberry_chocolate/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "strawberry_chocolate");
	location.reload();
	});
	controllerjs.find('#ctrl34').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/saffron_umbrella/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "saffron_umbrella");
	location.reload();
	});
	controllerjs.find('#ctrl35').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/royal_reds/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "royal_reds");
	location.reload();
	});
	controllerjs.find('#ctrl36').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/purple_siberia/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "purple_siberia");
	location.reload();
	});
	controllerjs.find('#ctrl37').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/pistacchio/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "pistacchio");
	location.reload();
	});
	controllerjs.find('#ctrl38').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/pink_black_yellow/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "pink_black_yellow");
	location.reload();
	});
	controllerjs.find('#ctrl39').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/navy_black_red/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "navy_black_red");
	location.reload();
	});
	controllerjs.find('#ctrl40').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/navy_black_blue/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "navy_black_blue");
	location.reload();
	});
	controllerjs.find('#ctrl41').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/invite/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "invite");
	location.reload();
	});
	controllerjs.find('#ctrl42').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/interstate/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "interstate");
	location.reload();
	});
	controllerjs.find('#ctrl43').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/grey_black_yellow/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "grey_black_yellow");
	location.reload();
	});
	controllerjs.find('#ctrl44').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/green_black_yellow/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "green_black_yellow");
	location.reload();
	});
	controllerjs.find('#ctrl45').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/flickery/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "flickery");
	location.reload();
	});
	controllerjs.find('#ctrl46').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/flashy_orange/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "flashy_orange");
	location.reload();
	});
	controllerjs.find('#ctrl47').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/flashy_green/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "flashy_green");
	location.reload();
	});
	controllerjs.find('#ctrl48').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/eleanor/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "eleanor");
	location.reload();
	});
	controllerjs.find('#ctrl49').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/eco_tree/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "eco_tree");
	location.reload();
	});
	controllerjs.find('#ctrl50').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/dirty_orange/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "dirty_orange");
	location.reload();
	});
	controllerjs.find('#ctrl51').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/dark_nugget/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "dark_nugget");
	location.reload();
	});
	controllerjs.find('#ctrl52').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/chocolate_black/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "chocolate_black");
	location.reload();
	});
	controllerjs.find('#ctrl53').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/cherrycake/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "cherrycake");
	location.reload();
	});
	controllerjs.find('#ctrl54').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/carrots/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "carrots");
	location.reload();
	});
	controllerjs.find('#ctrl55').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/calm_grey/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "calm_grey");
	location.reload();
	});
	controllerjs.find('#ctrl56').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/brown_style/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "brown_style");
	location.reload();
	});
	controllerjs.find('#ctrl57').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/brown_chocolate/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "brown_chocolate");
	location.reload();
	});
	controllerjs.find('#ctrl58').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/blue_shed/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "blue_shed");
	location.reload();
	});
	controllerjs.find('#ctrl59').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/army/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "army");
	location.reload();
	});
	controllerjs.find('#ctrl60').click(function(){
	jQuery('head').append('<link rel="stylesheet" href="css/img/colorbackgrounds/black_brown/style.css" type="text/css" />');
	jQuery.cookie("controllercolor", "black_brown");
	location.reload();
	});
	};
	
	
	
	
	/* Javascript check, color declarations check */
	$('html').removeClass('no-js').addClass('js');
	var menu = $('#menus');
	contrastColor = hex2rgb(contrastColor);
	if($('html').hasClass('oldie')){contrastColor = 'rgb(255,255,255)';}

	/* // This function is not working in the 1.0 version. There will be an update for it in 1.1. Twitter initiates. Enter your username here.
	$(".twitbox").tweet({
            username: "designsentry",
            join_text: "auto",
            avatar_size: 0,
            count: 1,
            auto_join_text_default: "",
            auto_join_text_ed: "",
            auto_join_text_ing: "",
            auto_join_text_reply: "ds replied to",
            auto_join_text_url: "ds was checking out",
            loading_text: "loading tweets..."
    }); */
	
	/* The menus dropdown rolldown script */
	menu.find('li:has(ul)').addClass('hassubmenu');
	menu.find('li').hover(function(){
		$(this).find('>a').children(':last').animate({color:contrastColorText1},{queue:false,duration:300});
		$('>a',this).css({borderBottomColor: accentColor,color: contrastColorText1});
	},function(){
		$(this).find('>a').children(':last').animate({color:contrastColorText3},{queue:false,duration:300});
		$('>a',this).animate({borderBottomColor: contrastColorLighter2,color: contrastColorText2},{queue:false,duration:100});
	});
	menu.find('li').hoverIntent({
	over: makeTall, 
	timeout: 200,
	sensitivity: 30,
	out: makeShort
	});
	function makeTall(){
		$(this).has('ul').addClass('current-hover').find('ul:first').slideDown({queue:false,duration:220});
		var availableSpace = $(window).width() - $(this).offset().left;
		if(availableSpace < 520){
			$(this).find('ul').find('li').find('ul').css({left: '-264px'});
		}
	}
	function makeShort(){ $(this).has('ul').removeClass('current-hover').find('ul:first').fadeOut({queue:false,duration:200});}
	
	/* The zone highlights for posts in blog (black bars turn red/color when they appear on the viewed space) */
	var zoneSizeMin = $(window).height()*0.1,
		zoneSizeMax = $(window).height()*0.9;
	$(document).scroll(function(){
		$('.thedash').each(function(){
			var elePosition = $(this).offset().top - $(document).scrollTop();
			if( elePosition < zoneSizeMax && elePosition > zoneSizeMin){
				$(this).animate({borderColor: accentColor},{queue:false,duration:400});
			}
			else if(elePosition < zoneSizeMin || elePosition > zoneSizeMax){
				$(this).animate({borderColor: '#2b2b2b'},{queue:false,duration:400});
			}
		});
	});
	
	/* Icons hover effect */
	$('ul.icons').find('li').add('.zoomer img').hover(function(){
		$(this).animate({opacity: 0.5},{queue:false,duration:250});
	},function(){
		$(this).animate({opacity: 1},{queue:false,duration:250});
	});
	$('#footer').find('.widget').find('ul:not(.icons)').find('li').hover(function(){
		$(this).find('a').css({borderColor: accentColor,color: contrastColorText1});
	},function(){
		$(this).find('a').animate({borderColor: contrastColorLighter2,color: contrastColorText2},{queue:false,duration:100});
	});
	$('#main').find('.widget').find('ul:not(.icons)').find('li').hover(function(){
		$(this).find('a').css({borderColor: accentColor,color: MainColorListHover});
	},function(){
		$(this).find('a').animate({borderColor: MainColorDarker1,color: MainColorText1},{queue:false,duration:100});
	});
	
	/* Newsletter effects (colored borders on focus) */
	var oldBgColor;
	$('#footer').find('.widget').find('form').find('input[type="text"],input[type="submit"]').hover(function(){
		oldBgColor = $(this).css('backgroundColor');
		$(this).animate({borderTopColor: contrastColorLighter2,borderRightColor: contrastColorLighter2,borderBottomColor: accentColor,borderLeftColor: contrastColorLighter2,backgroundColor: contrastColorDarker,color: contrastColorText1},{queue:false,duration:200});
	},function(){
		$(this).animate({borderColor: contrastColorLighter2,backgroundColor: oldBgColor,color: contrastColorText2},{queue:false,duration:200});
	});
	
	/* call for uniform JS, replacing ugly default checkboxes/radios when used */
	$('select,radio').uniform();
	
	/* Contact form validation, ajax response */
    var paraTag = jQuery('input#cf-submit').parent('p');
    jQuery(paraTag).children('input').remove();
    jQuery(paraTag).append('<input type="button" name="submit" id="cf-submit" value="Send it!" class="superbutton" />');

    jQuery('#form_main input#cf-submit').click(function() {
        jQuery('#form_main p').append('<img src="css/img/ajax-loader.gif" class="loaderIcon" alt="Loading..." />');

        var name = jQuery('input#name').val();
        var email = jQuery('input#cf-email').val();
        var phone = jQuery('input#phone').val();
        var comments = jQuery('textarea#comments').val();

        jQuery.ajax({
            type: 'post',
            url: 'sendEmail.php',
            data: 'name=' + name + '&email=' + email + '&phone=' + phone + '&comments=' + comments,

            success: function(results) {
                jQuery('#form_main img.loaderIcon').fadeOut(5000);
                jQuery('ul#form_response').html(results);
            }
        }); // end ajax
    });
	
	/* Search effects on hover and focus */
	$('#main').find('form').find('input[type="text"],input[type="submit"],textarea').hover(function(){
		$(this).animate({borderTopColor: MainColorDarker2,borderRightColor: MainColorDarker2,borderBottomColor: accentColor,borderLeftColor: MainColorDarker2},{queue:false,duration:200});
	},function(){
		$(this).animate({borderColor: MainColorDarker1},{queue:false,duration:200});
	});
	
	/* Collage splitting and loading sequence */
	var isHomepage = false;
	if($('body').hasClass('homepage')){isHomepage = true;}
	var viewWidth = $(window).width(),
	viewMultiplier = Math.round((viewWidth)/320),
	howManyItems = $('#collage').find('li').size(),
	howManyRows = Math.ceil(howManyItems/viewMultiplier),
	totalPicsDisplayed = howManyRows*viewMultiplier,
	properWidth = Math.round(viewWidth/viewMultiplier),
	howManyToFill = ((howManyRows)*viewMultiplier)-howManyItems;
	$('#collage').find('li').each(function(){
		var data_img = $(this).attr('data-img'),
			data_desc = $(this).attr('data-description');
		$(this).find('a').append('<img src="'+data_img+'" /><h5>'+data_desc+'</h5>');
	});
	if(isHomepage){
		if(properWidth > 318){viewMultiplier = viewMultiplier+1, totalPicsDisplayed = 3*viewMultiplier, properWidth = Math.round(viewWidth/viewMultiplier);}
		if(viewWidth < 1024){viewMultiplier = 3, totalPicsDisplayed = 9, properWidth = 318;}
		$('#collage').css({width:properWidth*viewMultiplier}).find('li').css({display:'none'}).slice(0,3*viewMultiplier).css({width:properWidth,display:'block'}).each(function(){
			var light = $.randomBetween(collageShadeMin, collageShadeMax),
				color = contrastColor.replace(/[^0-9,]+/g, ""),
				red = color.split(",")[0],
				gre = color.split(",")[1],
				blu = color.split(",")[2],
				hsv = RgbToHsv(red,gre,blu),
				rgb = HsvToRgb(hsv.h, hsv.s, light);
			color = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
			$(this).css({backgroundColor: color});
		});
	}else{
	if(howManyToFill > 0){for (i = 0; i < howManyToFill; i++) {$('#collage').append('<li><img src="images/collage/blank.png" alt="" /></li>');}}
		if(properWidth > 318){viewMultiplier = viewMultiplier+1, totalPicsDisplayed = howManyRows*viewMultiplier, properWidth = Math.round(viewWidth/viewMultiplier);}
		$('#collage').css({width:properWidth*viewMultiplier}).find('li').css({display:'none'}).slice(0,totalPicsDisplayed).css({width:properWidth,display:'block'}).each(function(){
			var light = $.randomBetween(4, 15),
				color = contrastColor.replace(/[^0-9,]+/g, ""),
				red = color.split(",")[0],
				gre = color.split(",")[1],
				blu = color.split(",")[2],
				hsv = RgbToHsv(red,gre,blu),
				rgb = HsvToRgb(hsv.h, hsv.s, light);
			color = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
			$(this).css({backgroundColor: color});
		});
	}
	
	$('#collage').find('li').slice(0,totalPicsDisplayed).find('img').one('load',function(){
		var randomTimeOut = $.randomBetween(0, 1800),
			$this = $(this),
			randomFadeIn = $.randomBetween(800,1800),
			colorImageUrl = this.src.replace('_bw','_col'),
			out = setTimeout(function(){$this.addClass('done'); clearTimeout(out);}, randomTimeOut+randomFadeIn);	
		$this.css({display:'block'}).hide();
		$this.delay(randomTimeOut).fadeIn(randomFadeIn);
		$this.parent().append('<img class="secondaryimg" style="display:none;" src="'+colorImageUrl+'" />');
	}).each(function(){
		if(this.complete) $(this).load();
	});
	
	$('#collage').find('li:has(a)').hover(function(){
		if($(this).find('img:first-child').hasClass('done')){
			$(this).find('img:first-child').animate({opacity: 0.01},{queue:true,duration:200}).end().find('img:last-child,h5').show();
		}
	},function(){
		if($(this).find('img:first-child').hasClass('done')){
			$(this).find('img:first-child').animate({opacity: 1},{queue:true,duration:200});
		}
	});
	
	/* Clear input on focus in fields */
	$('input[type=text]').each(function(){
	var inputfieldval = $(this).val();
		$(this).focus(function(){
			if(inputfieldval==$(this).val()){
				$(this).val('');
			}
		});
		$(this).blur(function(){
			if($(this).val()==''){
				$(this).val(inputfieldval);
			}
		});
	});
	
	/* Toggler */
	jQuery('div.toggler:not(.open)').hide();
	jQuery('.toggle').click(function(){
		jQuery(this).toggleClass("active").next().slideToggle("fast");
	});
	
	/* Tabber */
	jQuery('.ds_tabber_wrap,.ds_vtabber_wrap').each(function(){
	var tabContainers = jQuery(this).find('.ds_tabber');
	var tabSelectors = jQuery(this).find('.tabber li');
    tabContainers.hide();
    jQuery(this).find('ul.tabber li a').click(function(){
        tabContainers.hide().filter(this.hash).fadeIn(500);
        tabSelectors.removeClass('selected');
        jQuery(this).parent().addClass('selected');
        return false;
    });
	jQuery(this).find('ul.tabber li a:first').click();
	});
	
	/* Pricing Table */
	var pricingcolumn = jQuery('.pricing_column');
	pricingcolumn.hover(function(){
		jQuery(this).find('.pricing_blurb').animate({top: '4px'},200);
	},function(){
		jQuery(this).find('.pricing_blurb').animate({top: '0px'},200);
	});
	
	/* Set the pricing tables to the proper size */
	var pricingrowselector = jQuery('.pricing');
	pricingrowselector.each(function(){
		var numberofcolumns = jQuery(this).find('.pricing_column').length;
		var widthofrow = jQuery(this).parent().width();
		var finalresult = (11 + Math.floor(((widthofrow-2) - (numberofcolumns * (168)))/(numberofcolumns * 2)));
		jQuery(this).find('.pricing_blurb').css({marginLeft: finalresult,marginRight: finalresult});
	});
	
	/* previous onload */
	var fullScreenModeEngaged = false,
	vegasPaused = false;

	/* extending footer */
	var bodyHeight = $('body').height(),
		windowHeight = $(window).height(),
		menu = $('#menus'),
		menuli = menu.find('li').find('a'),
		docHeight = $(document).height();
	if((!$('#slider')&&(windowHeight > bodyHeight))){
		var currentFootHeight = $('#footer').height(),
			newFooterHeight = currentFootHeight + windowHeight - bodyHeight;
		$('#footer').css({height: newFooterHeight});
	}
	
	/* Preserve menu items widths when animating */
	listWidth = $.map($('#menus > li > a'),function(val){return $(val).width();});
	$.each(listWidth,function(key, value){$('#menus > li:nth-child(' + (key+1) + ') > a').css({minWidth: value});});
	
	/* Menus rollupdowns */
	function menuRollUp(){
		menuli.find('span:last-child').add('#logo').delay(100).animate({opacity: 0.01},{queue:true,duration:200}).hide(200);
		$("#menuswrap").delay(300).animate({height: "28px"},{queue:true,duration:400}).find(menu).delay(300).animate({bottom:"6px"},{queue:true,duration:400});
		menuli.delay(300).animate({paddingBottom: "1px",paddingTop: "1px"},{queue:true,duration:200});
		menuli.delay(200).animate({minWidth: "0px"},{queue:true,duration:300});
		menu.removeClass('default').addClass('fixed').find('li').find('ul').hide();
	}
	function menuRollDown(){
		$.each(listWidth,function(key, value){menu.find('> li:nth-child(' + (key+1) + ') > a').css({maxWidth:value}).animate({minWidth:value},{queue:true,duration:170});});
		menuli.delay(300).animate({paddingBottom: "4px",paddingTop: "4px"},{queue:true,duration:200});
		$("#menuswrap").delay(350).animate({height: "147px"},{queue:true,duration:300}).find("ul#menus").delay(400).animate({bottom:"23px"},{queue:true,duration:200});
		menuli.find('span:last-child').add('#logo').delay(350).show(250).animate({opacity: 1},{queue:true,duration:500});
		menu.removeClass('fixed').addClass('default').find('li').find('ul').hide();
	}
	
	/* Menus start */
	if(docHeight > windowHeight*1.5 && viewWidth > 1024){
		$('#header').addClass('supermenu');
	var entertainer = $('#entertainerwrap'),
		entertainerHeight = 0,
		pos = menu.offset();
	if(entertainer.length > 0){entertainerHeight = entertainer.height() - Math.round(entertainer.height()*0.6);}
	$(window).scroll(function(){
		if($(this).scrollTop() > pos.top+menu.height()+entertainerHeight && menu.hasClass('default')){
			menuRollUp();
		}
		else if($(this).scrollTop() <= pos.top && menu.hasClass('fixed') && fullScreenModeEngaged == false){
			menuRollDown();
		}
	});
	}
	
	/* EVG+BBQ Portfolio*/
	if($('body').hasClass('homepage') || $('body').hasClass('portfolio')){
  var cache = {
    '': $('')
  };	
  $(window).bind( 'hashchange', function(e) {
    var url = $.param.fragment();
    if ( cache[ url ] ) {
		$('#container').find('.closebutton').find('a').click();
    } else {
		fullScreenModeEngaged = true;
		menuRollUp();
		$('#entertainerwrap,#footerwrap,#mainwrap').fadeOut(500);
		//$('#header').animate({opacity:0.8},{queue:true,duration:400});
		$.ajax({
			url: url,
			type: 'post',
			data: {},
			async: true,
			cache: false,
			beforeSend:function(){
			},
			success: function(data){
				ahlsEV = $(data);
				$('#container').append(ahlsEV).find('.portfolioitemwrap,.portfolionavi,.closebutton').hide().delay(300).fadeIn(1000);
				$('.innerinfohead').jScrollPane({autoReinitialise:true,autoReinitialiseDelay:500});
				$('body').append('<div id="HAL"><div class="insides" /><p>loading..</p></div>');
				$('#HAL').fadeIn({queue:false,duration:6000});
				var backgroundsArray = [];
				$(data).imagesLoaded(function(){
					supportClasses = $('.portfolioitemwrap,.portfolionavi,.closebutton');
					$('#HAL').fadeOut({queue:false,duration:400});
					$('#container').find('.backgroundimages').find('img').each(function(){
						backgroundsArray.push({'src':this.src});
					});
					$.vegas('slideshow',{
						delay:5000,
						loading:false,
						backgrounds:backgroundsArray
					});
					setTimeout(function(){
						if($('#container').find('.pinfohead').length && viewWidth > 1024){
							portfolioDescriptionRollOut();
							$('#container').find('.showhide').fadeIn({queue:true,duration:300});
						}
					},1500)
					$('#container').find('.pnext').find('a').click(function(){
						$.vegas('next');
						$.vegas('pause');
						vegasPaused = true;
						return false;
					});
					$('#container').find('.pprev').find('a').click(function(){
						$.vegas('previous');
						$.vegas('pause');
						vegasPaused = true;
						return false;
					});
					$('#container').find('.closebutton').find('a').click(function(){
						menuRollDown();
						fullScreenModeEngaged = false;
						$('#entertainerwrap,#footerwrap,#mainwrap').delay(500).fadeIn(500);
						supportClasses.delay(100).fadeOut(500, function() { $(this).remove(); });
						$.vegas('stop');
						setTimeout(function(){
							$.vegas('destroy');
							$('#container').find('.backgroundimages').add('#HAL').remove();
						},1000);
					});
					$('#container').find('.showhide').find('a').toggle(function(){
						portfolioDescriptionRollIn();
					},function(){
						portfolioDescriptionRollOut();
					});
				});
			},
			error:function(){
			}
		});
    }
  });
  }
  
	/* Portfolio helper functions */
	function portfolioDescriptionRollOut(){
		$('#container').find('.closebutton').animate({left: "86px"},{queue:false,duration:300});
		$('#container').find('.portfolionavi').animate({left: "638px"},{queue:false,duration:300});
		$('#container').find('.showhide').removeClass('showhideretracted').animate({left: "193px",width: "49px",backgroundPosition:"(1px 1px)"},{queue:false,duration:300});
		$('#container').find('.pinfohead').fadeIn({queue:true,duration:300});
	}
	function portfolioDescriptionRollIn(){
		$('#container').find('.closebutton').animate({left: "0px"},{queue:false,duration:300});
		$('#container').find('.portfolionavi').animate({left: "107px"},{queue:false,duration:300});
		$('#container').find('.showhide').addClass('showhideretracted').animate({left: "0px",width: "192px",backgroundPosition:"(-102px 1px)"},{queue:false,duration:300});
		$('#container').find('.pinfohead').fadeOut({queue:true,duration:300});
	}
	if($('#collage')){
		$(document).keypress(function(e){
			if (e.keyCode == 37) { 
				$.vegas('previous');
				$.vegas('pause');
				vegasPaused = true;
				return false;
			}
		});
		$(document).keypress(function(e){
			if (e.keyCode == 39) { 
				$.vegas('next');
				$.vegas('pause');
				vegasPaused = true;
				return false;
			}
		});
		$(document).keydown(function(e){
			if (e.keyCode == 32) {
				if(vegasPaused == true){
					vegasPaused = false;
					$.vegas('slideshow');
				}
				else{
					vegasPaused = true;
					$.vegas('pause');
					return false;
				}
			}
		});
		$(document).keypress(function(e){
			if (e.keyCode == 40) { 
				portfolioDescriptionRollIn();
			}
		});
		$(document).keypress(function(e){
			if (e.keyCode == 38 && $('#container').find('.pinfohead').length) { 
				portfolioDescriptionRollOut();
			}
		});
	}
  
  // Since the event is only triggered when the hash changes, we need to trigger
  // the event now, to handle the hash the page may have loaded with.
  $(window).trigger( 'hashchange' );
  
  
});
/* End of onstart functions */
	
	
/* Start of functions initialized after full load of page */
jQuery(window).load(function(){

	/* Nivo Slider load for wide slider templates and normal slider template */
	$('#slider').nivoSlider({
        effect: 'random', // Specify sets like: 'fold,fade,sliceDown'
        slices: 10, // For slice animations
        boxCols: 8, // For box animations
        boxRows: 4, // For box animations
        animSpeed: 700, // Slide transition speed
        pauseTime: 9000, // How long each slide will show
        startSlide: 0, // Set starting Slide (0 index)
        directionNav: true, // Next & Prev navigation
        directionNavHide: true, // Only show on hover
        controlNav: true, // 1,2,3... navigation
        controlNavThumbs: false, // Use thumbnails for Control Nav
        pauseOnHover: true, // Stop animation while hovering
        manualAdvance: false, // Force manual transitions
        prevText: 'Prev', // Prev directionNav text
        nextText: 'Next', // Next directionNav text
        randomStart: false, // Start on a random slide
        beforeChange: function(){}, // Triggers before a slide transition
        afterChange: function(){}, // Triggers after a slide transition
        slideshowEnd: function(){}, // Triggers after all slides have been shown
        lastSlide: function(){}, // Triggers when last slide is shown
        afterLoad: function(){} // Triggers when slider has loaded
    });

	
	/* extending footer for slider page */
	var currentFootHeight = $('#footer').height(),
		bodyHeight = $('body').height(),
		windowHeight = $(window).height();
	if(($('#slider'))&&(windowHeight > bodyHeight)){
		newFooterHeight = newFooterHeight = currentFootHeight + windowHeight - bodyHeight;
		$('#footer').css({height: newFooterHeight});
	}
	
	/* prettyPhoto Lightbox */
	jQuery("a[rel^='prettyPhoto']").add('.ds_zoomer_pic').prettyPhoto({
		animation_speed: 'fast',
		slideshow: 5000,
		autoplay_slideshow: false,
		show_title: true,
		allow_resize: true,
		default_width: 500,
		default_height: 344,
		theme: 'dark_rounded', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
		overlay_gallery: true,
		social_tools: false /* for social icons un-comment this: '<div class="pp_social"><div class="twitter"><a href="http//twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http//platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="http//www.facebook.com/plugins/like.php?locale=en_US&href='+location.href+'&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div></div>' */
	});
	
});