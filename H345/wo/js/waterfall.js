/**
 * NOTES:
 * 
 * 
 * [TODO]��
 * 
 * 
 * �ٲ���
 * @author kidney<104958345@qq.com>
 * 
 */
(function(win, $, undefined) {
// ģ������



// ����ԭ������/����
var doc = win.document,
TRUE = true, FALSE = false, UNDEFINED = undefined, NULL = null,


// �����ַ���
BUFFER_TIME = 50,
SCROLL = 'scroll', RESIZE = 'resize',


/**
 * Ĭ������
 * @config
 */
defaultConfig = {
    onAdjustComplete: NULL, // ��������֮�󴥷�
    onAddComplete: NULL, // ��������ݿ鵽����֮�󴥷�
    container: '', // ��������
    colClassName: 'column', // ����������ʽ
    minColCount: 1, // ��С����, Ĭ��Ϊ 1. �����ڱ�Сʱ, ����õ�����������С�ڸ�ֵ.
    colWidth: 0, // ÿ�е��ܿ��. ���Ҫ��ÿ�еļ��, ���������� margin, ����ֵ��ָ������ padding, width, margin ����ܿ��.
    diff: 0, // ����ʱ, ����С�߶ȵ��г�������Ļ�߶�+�ѹ����߶�+diffʱ, ��ȥ���ظ�������.
    load: NULL // �û��Զ����������. �������, ָ����μ��ظ�������, ���������ݺ���θ�ʽ���� HTML, ��ȫ���û��Զ���, �������.
},


extendFun = {
    /**
     * ��ʼ��
     * @protected
     */
    _init: function() {
        var self = this;
        
        $(win).on(RESIZE, {selfCls:self, type:RESIZE}, self._onWinFn);
        
        self._buildTree(); // ������������
        
        // һ��ʼ�� adjust һ�Σ����Զ����о�̬���ݴ���
        self._resizeEvent();
        
        (typeof self.config.load === 'function') && self.startScroll();
    },
    
    /**
     * ������������
     * @protected
     */
    _buildTree: function() {
        var self = this,
            items = self.config.container.find('div.J_waterFallItem'),
            i = 0, itemsLen = items.length,
            tmpArr = [];
        
        for (; i < itemsLen; i++) {
            tmpArr.push(items[i]);
        }
        
        tmpArr.length && (self._rootTree = tmpArr);
    },
    
    /**
     * ����win�¼�������, ����Ƶ������
     * @protected
     * 
     * @param {Event} event event
     */
    _onWinFn: function(event) {
        var self = event.data.selfCls;
        
        !self.__timer || clearTimeout(self.__timer);
            
        self.__timer = setTimeout(function() {
            if (self.__timer) {
                clearTimeout(self.__timer);
                self.__timer = UNDEFINED;
            }
            
            (event.type === RESIZE) ? self._resizeEvent() : self._scrollEvent();
        }, BUFFER_TIME);
    },
    
    /**
     * ��ȡ̽����
     * @protected
     * @return {JqElement}
     */
    _getDetect: function() {
        var self = this, cfg = self.config;
        
        if (!self.__detectEl) {
            self.__detectEl = $('<div>', {
                id: 'J_waterFallDetect',
                'class': cfg.colClassName
            }).appendTo(self.config.container);
        }
        return self.__detectEl;
    },
    
    /**
     * �����¼�
     * @protected
     */
    _scrollEvent: function() {
        var self = this, cfg = self.config,
            scrollTop = $(win).scrollTop();
        
        // �������볬��100�Ž��д���
        if (self._loading || Math.abs(scrollTop - self._scrollTop) < 200) {
            return FALSE;
        }
        
        self._scrollTop = scrollTop;
        
        var colHeight = cfg.container.offset().top,
            diff = cfg.diff,
            curColHeights = [],
            
            columnEls = self._getColumnEls(),
            i = 0, columnCount = self._getColumnCount();
        
        // �ռ�ÿ�и߶�
        for (; i < columnCount; i++) {
            curColHeights.push(columnEls.eq(i).outerHeight());
        }
        
        // �ҵ���С�и߶�
        if (curColHeights.length) {
            colHeight += Math.min.apply(Math, curColHeights);
        }
        
        // ��̬��
        // ��С�߶�(���û�������)����Ԥ������
        if (diff + scrollTop + $(win).height() > colHeight) {
            self._loadData();
        }
    },
    
    /**
     * resize�¼�
     * @protected
     */
    _resizeEvent: function() {
        var self = this,
            detectEl = self._getDetect(), // ̽����
            detectElLeft = detectEl.position().left;
        
        //if (detectElLeft - self._detectElLeft > 10) {
        if (detectElLeft > 10) {
            // ̽����λ�ó��ֱ仯, ����item
            self.adjust();
        }
    },
    
    /**
     * ��ȡ����Ŀ����
     * @protected
     * @param {Boolean} reCount �Ƿ����¼���
     * @return {Int}
     */
    _getColumnCount: function(reCount) {
        reCount = reCount || FALSE;
        
        var self = this, cfg = self.config;
        
        if (reCount || !self.__columnCount) {
            self.__columnCount = Math.floor(cfg.container.outerWidth(TRUE) / cfg.colWidth);
        }
        
        return self.__columnCount;
    },
    
    /**
     * ��ȡ����Ŀ����
     * @protected
     * @param {Boolean} reFind �Ƿ����»�ȡ
     * @return {Array}
     */
    _getColumnEls: function(reFind) {
        reFind = reFind || FALSE;
        
        var self = this;
        
        if (reFind || !self.__columnEls) {
            self.__columnEls = self.config.container.find('div.J_waterFallColumn');
        }
        
        return self.__columnEls;
    },
    
    /**
     * �����������
     * @protected
     */
    _loadData: function() {
        var self = this,
            loadFn = self.config.load;
        
        self._loading = TRUE;
        
        function success(items) {
            self._loading = FALSE;
            self.addItems(items);
        }
        
        function end() {
            //self.end();
            self.stopScroll();
        }
        
        (typeof loadFn === 'function') && loadFn.apply(self, [success, end]);
    },
    
    /**
     * �����ص�����
     * @protected
     * @param {string} type �ص�key
     * @param {array|string|object} data �ص�����
     */
    _trigger:function(type, data){
        var self = this,
            callback = self.config['on' + type.charAt(0).toUpperCase() + type.substring(1)];
        
        if (!$.isArray(data))
        {
            data = [data];
        }
        
        (typeof callback === 'function') && callback.apply(self, data);
    },
    
    /**
     * �������е�itemλ��
     * @public
     */
    adjust: function() {
        var self = this, cfg = self.config,
            rootTree = self._rootTree; // ���ݸ���
        
        if (!rootTree) {
            return;
        }
        
        var container = cfg.container,
            columnCount = self._getColumnCount(TRUE), // ����������
            i = 0, rootTreeLen = rootTree.length,            
            
            // Fragment
            colFragment = doc.createDocumentFragment(),
            itemNodeFragment = [],
            
            colNode;

        // �����ļ�Ƭ��
        for(i = 0; i < columnCount; i++) {
            itemNodeFragment[i] = doc.createDocumentFragment();
        }
        
        // �������
        for(i = 0; i < rootTreeLen; i++) {
            itemNodeFragment[i % columnCount].appendChild(rootTree[i]);
        }
        
        // ������ע��������
        for(i = 0; i < columnCount; i++) {
            colNode = doc.createElement('div');
            colNode.className = 'J_waterFallColumn ' + cfg.colClassName;
            colNode.style.width = cfg.colWidth + 'px';
            
            colNode.appendChild(itemNodeFragment[i]);
            colFragment.appendChild(colNode);
        }
        
        // clear
        $('div.J_waterFallColumn').remove();
        container[0].insertBefore(colFragment, container[0].firstChild);
        
        self._getColumnEls(TRUE);
        
        self._detectElLeft = self._getDetect().position().left;
        
        self._trigger('adjustComplete', [rootTree]);
        
        return self;
    },
    
    /**
     * ���������
     * @public
     * @param {Array} items ��ӵ����ݿ�����
     * @return {Object}
     */
    addItems: function(items) {
        if (!$.isArray(items)) return FALSE;
        
        var self = this,
            //jqWin = $(win),
            //scrollTop = jqWin.scrollTop(),
            //winHeight = jqWin.height(),
            
            columnEl = self._getColumnEls(),
            columnCount = self._getColumnCount(),
            
            i = 0, j = 0, $minColumnEl, $tmpColumnEl, tmpMinColumnHeight = 0,
            itemsLen = items.length;
        
        self._rootTree = self._rootTree.concat(items);
        
        for (;i < itemsLen; i++) {
            // �ҵ���С�и߶�
            //if (curColHeights.length) {
            //    colHeight += Math.min.apply(Math, curColHeights);
            //}
            
            for (j = 0; j < columnCount; j++) {
                $tmpColumnEl = columnEl.eq(j);
                
                if (j === 0 || tmpMinColumnHeight && $tmpColumnEl.outerHeight() < tmpMinColumnHeight) {
                    tmpMinColumnHeight = $tmpColumnEl.outerHeight();
                    $minColumnEl = $tmpColumnEl;
                }
            }
            $minColumnEl && $minColumnEl.append(items[i]);
            $minColumnEl = NULL;
            tmpColumnHeight = 0;
        }
        
        self._trigger('addComplete', [items]);
        
        return self;
    },
    
    /**
     * ��ʼ��� scroll �¼�����ʱ���ܻᶯ̬���أ�
     */
    startScroll: function() {
        var self = this;
        
        if (!self._scrollStarted) {
            $(win).on(SCROLL, {selfCls:self, type:SCROLL}, self._onWinFn);
            self._scrollStarted = TRUE;
        }
        
        return self;
    },
    
    /**
     * ֹͣ��� scroll �¼���ֹͣ��̬���أ�
     */
    stopScroll: function() {
        var self = this;
        
        $(win).off(SCROLL, self._onWinFn);
        self._scrollStarted = FALSE;
        
        return self;
    }
};

/**
 * �ٲ������
 * @constructor
 */
function Waterfall(config) {
    var self = this;
    
    // factory or constructor
    if (!(self instanceof Waterfall)) {
        return new Waterfall(config);
    }
    
    // change to jq mode
    if (typeof config.container === 'string') {
        config.container = $(config.container);
    }
    
    // mix config
    self.config = $.extend({}, defaultConfig, config);
    
    /**
     * scroll & resizeʱ����
     * @type {Int}
     */
    //self.__timer;
    
    /**
     * �Ƿ�������������
     * @type {Boolean}
     */
    //self._scrollStarted;
    
    /**
     * ������
     * @type {Int}
     */
    //self.__columnCount;
    
    /**
     * ÿ��DOM����
     * @type {Array}
     */
    //self.__columnEls;
    
    /**
     * ̽����
     * @type {JqElement}
     */
    //self.__detectEl;
    
    /**
     * ̽����ƫ��ֵ
     * @type {Int}
     */
    self._detectElLeft = 0;
    
    /**
     * �ϴε�scrollTopֵ
     * @type {Int}
     */
    self._scrollTop = 0;
    
    /**
     * �������ṹ
     * @type {Array}
     */
    self._rootTree = [];
    
    // ��ʼ��
    self._init();
}

$.extend(Waterfall.prototype, extendFun);

// create api
$.each(['adjust', 'isAdjusting', 'addItems', 'startScroll', 'endScroll'], function(){
    Waterfall[this] = Waterfall.prototype[this];
});

win.jQuery.Waterfall = Waterfall;
})(window, jQuery);


