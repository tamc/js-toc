class TableOfContents

  constructor: (@target = "#toc", @content = "body", @tags = ['h1','h2','h3']) ->
    @updateToc()
    
  updateToc: () ->
    @tocHeadings = $$(@content)[0].select(@tags.join())
    @toc = (@tocForElement(e,i) for e,i in @tocHeadings)
    console.log @tocHeadings, @toc
    $$(@target)[0].insert(@toc.join("\n"))
    @tocHeadings

  tocForElement: (e,i) ->
    e.id ||= "toc#{i}"
    "<a href='##{e.id}' class='toc#{e.tagName}'>#{e.textContent}</a>"
    
window.TableOfContents = TableOfContents
  