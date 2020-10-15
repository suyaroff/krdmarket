var pageStyle = '<style> #pageNavigator { position: fixed; left: 0; top: 10%; background: #ccc; box-sizing: border-box; } .pageNavigator__button { position: absolute; left: 100%; top:0; font-size: 18px; cursor: pointer; border: 1px solid #ccc; padding: 5px; text-align: center; color: #000; } .pageNavigator__container{ overflow: hidden; margin: 15px; } .pageNavigator__title{ font-weight: bold; font-size: 20px; margin-bottom: 10px; } #pageNavigator ul { list-style: decimal inside; margin: 0; padding: 0; } #pageNavigator li { margin: 0 0 5px 0; } #pageNavigator li a {font-size: 16px;text-decoration: none;} #pageNavigator li a:hover{color: #000;} #pageNavigator.closed {width: 0;}</style>';
var pageNavigatorHtml = '<div id="pageNavigator"><div class="pageNavigator__button">🛠</div><div class="pageNavigator__container"><div class="pageNavigator__title">Навигация / Navigation</div><ul id="pageNavigatorList"></ul></div></div>';

var pagesList = [
    {file:'index.html', title:'Главная'},
    {file:'catalog.html', title:'Каталог'},
    {file:'product.html', title:'Карточка товара'},
];

$(document).ready(function() {
    $('head').append(pageStyle);
    $('body').append(pageNavigatorHtml);
    var pagesHtmlList = '';
    pagesList.forEach(i => {
        pagesHtmlList += '<li><a href="'+i.file+'">'+i.title+'</a></li>';
    });
    $('#pageNavigatorList').html(pagesHtmlList);
    $('.pageNavigator__button').click(function() {
        $("#pageNavigator").toggleClass('closed');
    });
});