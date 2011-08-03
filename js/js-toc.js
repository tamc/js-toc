(function() {
  var TableOfContents;
  TableOfContents = (function() {
    function TableOfContents(target, content, tags) {
      this.target = target != null ? target : "#toc";
      this.content = content != null ? content : "body";
      this.tags = tags != null ? tags : ['h1', 'h2', 'h3'];
      this.updateToc();
    }
    TableOfContents.prototype.updateToc = function() {
      var e, i;
      this.tocHeadings = $$(this.content)[0].select(this.tags.join());
      this.toc = (function() {
        var _len, _ref, _results;
        _ref = this.tocHeadings;
        _results = [];
        for (i = 0, _len = _ref.length; i < _len; i++) {
          e = _ref[i];
          _results.push(this.tocForElement(e, i));
        }
        return _results;
      }).call(this);
      console.log(this.tocHeadings, this.toc);
      $$(this.target)[0].insert(this.toc.join("\n"));
      return this.tocHeadings;
    };
    TableOfContents.prototype.tocForElement = function(e, i) {
      e.id || (e.id = "toc" + i);
      return "<a href='#" + e.id + "' class='toc" + e.tagName + "'>" + e.textContent + "</a>";
    };
    return TableOfContents;
  })();
  window.TableOfContents = TableOfContents;
}).call(this);
