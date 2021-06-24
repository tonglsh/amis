amis.define('docs/zh-CN/components/table-view.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Table View 表格展现",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Table View 表格展现",
    "icon": null,
    "order": 68,
    "html": "<div class=\"markdown-body\"><blockquote>\n<p>1.2.0 及以上版本才有此功能</p>\n</blockquote>\n<p>通过表格的方式来展现数据，和 <a href=\"./table\">table</a> 的不同之处：</p>\n<ul>\n<li>数据源要求不同<ul>\n<li>table 的数据源需要是多行的数据，最典型的就是来自某个数据库的表</li>\n<li>table view 的数据源可以来自各种固定的数据，比如单元格的某一列是来自某个变量</li>\n</ul>\n</li>\n<li>功能不同<ul>\n<li>table 只能用来做数据表的展现</li>\n<li>table view 除了展现复杂的报表，还能用来进行布局</li>\n</ul>\n</li>\n<li>合并单元格方式不同<ul>\n<li>table 的合并单元格需要依赖数据</li>\n<li>table view 的合并单元格是手动指定的，因此可以支持不规则的数据格式</li>\n</ul>\n</li>\n</ul>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"service\",\n  \"data\": {\n    \"beijing\": \"20\",\n    \"tianjing\": \"19\"\n  },\n  \"body\": [\n    {\n      \"type\": \"table-view\",\n      \"trs\": [\n        {\n          \"background\": \"#F7F7F7\",\n          \"tds\": [\n            {\n              \"body\": {\n                \"type\": \"tpl\",\n                \"tpl\": \"地区\"\n              }\n            },\n            {\n              \"body\": {\n                \"type\": \"tpl\",\n                \"tpl\": \"城市\"\n              }\n            },\n            {\n              \"body\": {\n                \"type\": \"tpl\",\n                \"tpl\": \"销量\"\n              }\n            }\n          ]\n        },\n        {\n          \"tds\": [\n            {\n              \"rowspan\": 2,\n              \"body\": {\n                \"type\": \"tpl\",\n                \"tpl\": \" 华北\"\n              }\n            },\n            {\n              \"body\": {\n                \"type\": \"tpl\",\n                \"tpl\": \"北京\"\n              }\n            },\n            {\n              \"body\": {\n                \"type\": \"tpl\",\n                \"tpl\": \"${beijing}\"\n              }\n            }\n          ]\n        },\n        {\n          \"tds\": [\n            {\n              \"body\": {\n                \"type\": \"tpl\",\n                \"tpl\": \"天津\"\n              }\n            },\n            {\n              \"body\": {\n                \"type\": \"tpl\",\n                \"tpl\": \"${tianjing}\"\n              }\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>可以看到 table view 需要手动进行单元格合并，因此更适合使用可视化编辑器进行编辑。</p>\n<h2><a class=\"anchor\" name=\"%E8%AE%BE%E7%BD%AE%E9%A1%B9\" href=\"#%E8%AE%BE%E7%BD%AE%E9%A1%B9\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>设置项</h2><p>table view 的设置项有三层，可以分别对表格级别、行级别、单元格级别进行设置。</p>\n<h3><a class=\"anchor\" name=\"%E8%A1%A8%E6%A0%BC%E8%AE%BE%E7%BD%AE%E9%A1%B9\" href=\"#%E8%A1%A8%E6%A0%BC%E8%AE%BE%E7%BD%AE%E9%A1%B9\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>表格设置项</h3><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>width</td>\n<td><code>number/string</code></td>\n<td>&#39;100%&#39;</td>\n<td></td>\n</tr>\n<tr>\n<td>padding</td>\n<td><code>number/string</code></td>\n<td>&#39;var(--TableCell-paddingY) var(--TableCell-paddingX)&#39;</td>\n<td>单元格默认内间距</td>\n</tr>\n<tr>\n<td>border</td>\n<td><code>boolean</code></td>\n<td>true</td>\n<td>是否显示边框</td>\n</tr>\n<tr>\n<td>borderColor</td>\n<td><code>string</code></td>\n<td><code>var(--borderColor)</code></td>\n<td>边框颜色</td>\n</tr>\n<tr>\n<td>trs</td>\n<td></td>\n<td></td>\n<td>参考下面的行设置</td>\n</tr>\n</tbody></table>\n<h3><a class=\"anchor\" name=\"%E8%A1%8C%E8%AE%BE%E7%BD%AE\" href=\"#%E8%A1%8C%E8%AE%BE%E7%BD%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>行设置</h3><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>height</td>\n<td><code>number/string</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>background</td>\n<td><code>string</code></td>\n<td></td>\n<td>行背景色</td>\n</tr>\n<tr>\n<td>tds</td>\n<td></td>\n<td></td>\n<td>参考下面的单元格设置</td>\n</tr>\n</tbody></table>\n<h3><a class=\"anchor\" name=\"%E5%8D%95%E5%85%83%E6%A0%BC%E8%AE%BE%E7%BD%AE\" href=\"#%E5%8D%95%E5%85%83%E6%A0%BC%E8%AE%BE%E7%BD%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>单元格设置</h3><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>background</td>\n<td><code>string</code></td>\n<td></td>\n<td>单元格背景色</td>\n</tr>\n<tr>\n<td>color</td>\n<td><code>string</code></td>\n<td></td>\n<td>单元格文字颜色</td>\n</tr>\n<tr>\n<td>bold</td>\n<td><code>boolean</code></td>\n<td>false</td>\n<td>单元格文字是否加粗</td>\n</tr>\n<tr>\n<td>width</td>\n<td><code>number/string</code></td>\n<td></td>\n<td>单元格宽度，只需要设置第一行</td>\n</tr>\n<tr>\n<td>padding</td>\n<td><code>number/string</code></td>\n<td>集成表格的设置</td>\n<td>单元格内间距</td>\n</tr>\n<tr>\n<td>align</td>\n<td><code>string</code></td>\n<td><code>left</code></td>\n<td>单元格内的水平对齐，可以是 <code>left</code>、<code>center</code>、<code>right</code></td>\n</tr>\n<tr>\n<td>valign</td>\n<td><code>string</code></td>\n<td><code>middle</code></td>\n<td>单元格内的垂直对齐，可以是 <code>top</code>、<code>middle</code>、<code>bottom</code>、<code>baseline</code></td>\n</tr>\n<tr>\n<td>colspan</td>\n<td><code>number</code></td>\n<td></td>\n<td>单元格水平跨几行</td>\n</tr>\n<tr>\n<td>rowspan</td>\n<td><code>number</code></td>\n<td></td>\n<td>单元格垂直跨几列</td>\n</tr>\n<tr>\n<td>body</td>\n<td><a href=\"../../docs/types/schemanode\">SchemaNode</a></td>\n<td></td>\n<td>其它 amis 设置</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "设置项",
          "fragment": "%E8%AE%BE%E7%BD%AE%E9%A1%B9",
          "fullPath": "#%E8%AE%BE%E7%BD%AE%E9%A1%B9",
          "level": 2,
          "children": [
            {
              "label": "表格设置项",
              "fragment": "%E8%A1%A8%E6%A0%BC%E8%AE%BE%E7%BD%AE%E9%A1%B9",
              "fullPath": "#%E8%A1%A8%E6%A0%BC%E8%AE%BE%E7%BD%AE%E9%A1%B9",
              "level": 3
            },
            {
              "label": "行设置",
              "fragment": "%E8%A1%8C%E8%AE%BE%E7%BD%AE",
              "fullPath": "#%E8%A1%8C%E8%AE%BE%E7%BD%AE",
              "level": 3
            },
            {
              "label": "单元格设置",
              "fragment": "%E5%8D%95%E5%85%83%E6%A0%BC%E8%AE%BE%E7%BD%AE",
              "fullPath": "#%E5%8D%95%E5%85%83%E6%A0%BC%E8%AE%BE%E7%BD%AE",
              "level": 3
            }
          ]
        }
      ],
      "level": 0
    }
  };

});
