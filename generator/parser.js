var title, description, category, name, email, featured, image, sources, article, result = "";

function generateDocument(){
  getResults();
  generateResults();
  redirectToResults();
}

function generateResults(){
  result += "---\nlayout: post\n";
  result += "title: \"" + title + "\"\n";
  result += "description: \"" + description + "\"\n";
  result += "categories: " + category + "\n";
  result += "author: " + name + "\n";
  result += "email: " + email + "@andover.edu\n";
  if(featured) result += "featured: true\n";
  if(image.length > 0) result += "img: " + image + "\n";
  if(download.length > 0) result += "download: " + download + "\n";
  if(sources.length > 0){
    result += "sources: |\n";
    var sourcesArr = sources.split("\n");
    for(var i = 0; i < sourcesArr.length; i++){
      result += "&emsp;" + sourcesArr[i].trim() + "&lt;br&gt;\n";
    }
  }
  result += "---\n";
  var articleArr = article.trim().split("\n");
  console.log(articleArr);
  for(var i = 0; i < articleArr.length; i++){
    result += articleArr[i].trim() + "&lt;br&gt;&lt;br&gt;\n";
  }
}

function getResults(){
  title = $("#title").val();
  description = $("#description").val();
  category = $(".category").filter(":checked").val();
  name = $("#name").val();
  email = $("#email").val();
  featured = $("#checkbox").is(":checked");
  image = $("#image").val();
  sources = $("#sources").val();
  article = $("#article").val();
  download = $("#download").val();
}

function redirectToResults(){
  $("#form").hide();
  $("#button").hide();
  $("#results").html(result);
}
