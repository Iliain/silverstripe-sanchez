module.exports = {
	".text.html.ss": {
		"editor": {
			"commentStart": "<%-- ",
			"commentEnd": " --%>",
			"increaseIndentPattern": "<(?!area|base|br|col|frame|hr|html|img|input|link|meta|param)([A-Za-z0-9]+)(\\s[-_.\\s\\d\\w\\t{}$\\(\\)=\"\\'#]*)*(>|!/>)(?!.*</\\1>)|<% (?!include|require|base_tag)(control|loop|with|if|else_if) \\$?([-_.$\\(\\)&\"', A-Za-z0-9]+) %>(?!.*<% end_\\4 %>)|<% else %>(?!.*<% end_if %>)|<%--(?!.*--%>)|<!--(?!.*-->)",
			"decreaseIndentPattern": "(^\\s*(</(?!html)([-_\\.()A-Za-z0-9]+)>|<% end_(control|loop|with|if) %>|-->)|<% else %>(?!.*<% end_if %>))"
		}
	}
}