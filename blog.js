function addBlog() {
  //get the author name
  let author = document.getElementsByName("userName")[0].value;
  //get the blog title
  let title = document.getElementsByName("titleBlog")[0].value;
  //get the blog content
  let blogContent = document.getElementsByName("content")[0].value;
  //Checks if all fields have values
  if (author && title && blogContent) {
    //Create div tags for Author, content and title
    let divATag = document.createElement("div");
    let divTTag = document.createElement("div");
    let divPTag = document.createElement("div");
    let divEachContentTag = document.createElement("div");
    //create a heading element to hold title name
    let titleHTag = document.createElement("h4");
    //create a p tag to hold the content of blog
    let pTag = document.createElement("p");
    //create a heading element to  hold author name
    let authorHTag = document.createElement("h6");

    //Add the blog title name to the tag
    titleHTag.innerHTML = title;
    //Add blog content to p tag
    pTag.innerHTML = blogContent;
    //Add the author name content to tag
    authorHTag.innerHTML = "Author : " + author;

    //Set the attributes to the tags created
    divTTag.setAttribute("class", "row blogData");
    divPTag.setAttribute("class", "row blogData");
    divATag.setAttribute("class", "row blogData");
    divEachContentTag.setAttribute("class", "eachContent");
    //titleHTag.appendChild(titleContentHTag);
    divTTag.appendChild(titleHTag);
    divEachContentTag.appendChild(divTTag);
    divPTag.appendChild(pTag);
    divEachContentTag.appendChild(divPTag);
    divATag.appendChild(authorHTag);
    divEachContentTag.appendChild(divATag);

    document.getElementById("content").appendChild(divEachContentTag);
    
    return false;
  }
}
