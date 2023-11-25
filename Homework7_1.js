re = /[^a ]{6,}/gmi; //ignores character "a"(case insensitive) and spaces, only getting the strings of 6 symbols or more.
string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tortor nisl,\
 vulputate cursus sagittis dapibus, ornare vel nibh. Curabitur quis varius mauris, \
 et rhoncus metus. Etiam malesuada vestibulum arcu, eget fringilla velit sagittis non. \
 Nullam pretium, erat vel bibendum aliquet, lectus erat interdum velit, in dictum justo \
 lectus id nunc. Ut gravida sagittis lectus, ultricies tincidunt tortor consequat quis. \
 Curabitur eget diam commodo, imperdiet nulla fermentum, maximus metus. Cras erat velit, \
 congue facilisis gravida id, vestibulum sed sem. In blandit pretium ipsum a ullamcorper.";

result = string.match(re);
console.log(result);