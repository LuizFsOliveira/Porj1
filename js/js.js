var date = $("<p></p>").text("");
        var summary = $("<p></p>").text("");

        $(document).ready(function(){
            $.get("https://api.spaceflightnewsapi.net/v3/articles", function(data){
                var newsList = $("#news-list");
                $.each(data, function(index, article){
                    var listItem = $("<li></li>");

                    var title = $("<h3></h3>").text(article.title);
                    var date = $("<p></p>").text(new Date(article.publishedAt).toLocaleDateString("pt-BR"));
                    var summary = $("<p></p>").text(article.summary);
                    var image = $("<img>").attr("src", article.imageUrl).addClass("article-image");

                    listItem.append(title);
                    listItem.append(date);
                    listItem.append(summary);
                    listItem.append(image);
                    
                    newsList.append(listItem);

                })
            })
        })  
        //Estrutura da Seta para Baixo
        $(document).ready(function() {
    
            $("#scrollDown").click(function() {
                $("html, body").animate({scrollTop: $(document).height()}, 500);
            });
        });

        