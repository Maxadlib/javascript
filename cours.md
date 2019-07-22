# Javascript
## intro
- Javascript : Langage de programmation d'internet
- écrire variable en anglais car le reste du language est en anglais, l'anglais est plus concis, langue commune dans les équipes multilingues, pas de carcatères spéciaux.
- Prérequis : HTML et CSS

## Chapitre 1 - Découvrir Javascript
- ctrl + maj + i = outil de développement dans chrome

## Chapitre 2 - Connaître les principales syntaxes de Javascript
<<<<<<< Updated upstream
- Début de vidéo ["Découvrir la structure de Javascript"](https://www.linkedin.com/learning/l-essentiel-de-javascript/decouvrir-la-structure-de-javascript?u=42107057 "Lien vers la vidéo")
- Javascript est un language compilé qui n'a pas besoin d'interprétation avant d'arriver au navigateur
- Le Javascript est un code interprété, et non compilé(C++, Java...)
- Javascript est SENSIBLE à LA CASSE !
- Il vaut mieux mettre une instruction par ligne (ex : les "alerte" )
- Terminer l'instruction par un ;
- Les espaces n'ont pas d'influence sur le code (mais oui dans les chaînes de      caractères)pour envoyer 
- Les commentaires sur une ligne commencent  // (sur la ligne précédente, ou à la fin d'une ligne)
- Les commentaires plus longs (sur plusierurs lignes) commencent par /* et finissent par */
- Le javascript peut être online (en ligne), ou dans une page script.js appelée en bas de page `<script src="script.js"></script>`
- en HTML5 l'attribut `type="text/javascript` est optionnel
- Pour envoyer un message dans la console `console.log("Message envoyé)`
- Debug `console.debug("Message envoyé)`
- Info `console.info("Message envoyé)`
- Warn `console.warn("Message envoyé)`
- Error `console.error("Message envoyé");`
- Pour info `console.log` n'est pas une fonctionnalité officielle de Javascript
- Les variables permettent de stocker une ou plusieurs données
- Pour créer des variables en JS, il suffit de **déclarer** `var nomDeLaVariable;`
- Puis il faut l'**initialiser** `nomDeLaVariable = "valeur";`
- On peut le faire en une ligne `var nomDeLaVariable = "valeur";`
- `var`n'est pas obligatoire pour déclarer une variable mais il vaut mieux le faire tout le temps
- Pas d'espace, de tirets6, dans le nom des variables 
- On peut utiliser `_`,`$`, des nombres mais pas en début de variable
- une variable peut contenir plusieurs genre de variable (chaîne de caractère, boléen, nombre, date...) au cours de sa vie
- les opérations de multiplications et divisions sont prioritaires aux additions et soustractions. Sinon il faut mettre des parenthèses. 
- Il ne faut pas confondre les parenthèses et les accolades.`if(amount > 1000){console.log("Amount est supérieur à 1000");}`
- Si il n'y a qu'un seule ligne de code exécuté après la condition, il n'est pas obligatoire d'avoir les accolades. Mais il est préférable de toujours les mettre.
- **Opérateur ternaire : 3 parties :la question, la réponse si vrai, et la réponse si faux**
- NaN = Not a Number
- Attention, une variable créée dans une fonction n'est disponible qu'à l'intérieur de cette fonction. Pour qu'elle soit disponible partout il faut la déclarer en dehors `var a=1, b=2, result` (<-variable gobale) C'est la portée de la variable, le scope.

## Chapitre 3 - Exploiter les objets et types de données
- Un objet est une variable unique qui est capable de contenir plusieurs propriétés et plusieurs méthodes différentes.
- Les informations contenues dans objet ne s'appellent plus des variables, mais des propriétés.
- Dans un objet, on peut créer das propriétés mais aussi des fonctions.
- Quand une function est associée à un objet, on ne l'appelle plus fonction mais méthode.
- Le mot clé `this` fait référence à l'objet en cours d'utilisation.
- La concaténation est prendre des chaînes de caractères et les joindre ensemble pour former une chaîne de caractères plus longue. exemple = `"2"+"7" = 27`
- `Number` est une fonction native de javascript qui permet de convertir la donnée demandée.
- `NaN` = Not a Number
- `isNaN`= est-ce que la valeur peut être convertie en nombre ?
- Le `!`dans le `if` a pour effet d'inverser les false en true et les true en false
- L'objet `Math` est disponible nativement dans Javascript.
- En Js, les mois sont comptés de 0 à 11, et non de 01 à 12.
- `getDate()` récupère le jour dans le mois (de 1 à 31), tandis que `getDay()` récupère le jour dans la semaine (de 0 à 6).
- `console.log(otherDate.getTime());` récupère la durée en millisecondes depuis le 1er janvier 1970 à la date déclarée.
- Un Array est un type d'objet en JS.
- à toutes les fonctions `get` correspond une fonction `set`.
- Les Arrays utilisent un système basé sur des index, là où les objets utilisent un système basé plutôt sur des proporiétés (qu'on pouvait nommer).
- Conseil : consulter documentation en ligne sur ce qui est possible de faire avec les différentes propriétés et méthodes des Array.
- Dans les chaînes de caractères, le `\` permet d'échapper le caractère spécial `'` ou `"`.
- Conseil : Consulter [objet string sur w3school](https://www.w3schools.com/jsref/jsref_obj_string.asp "je consulte") Mais aussi pour les autres types d'objets !

## Chapitre 4 - Découvrir le Document Object Model
- *Document* : C'est la page web. Le javascript comprend la page web comme une collection d'objets.
- *Object* : `array`, `nombre`, `date`... ça peut être un titre de niveau 1, une liste.
- *Model* : Le modèle est une convention, un jeu de termes et de procédures auxquelles on adhère tous. Le `html` est comme un arbre, avec `head` qui contient `title`, et `body` qui contient `h1`, `p`, `ul`... Chaque élément de cet arbre est appelé un noeud, *node* en anglais. `P` est l'*enfant* de `body`, et le `body` est le *parent* de `p`.
- Le *DOM* est une convention qui permet de manipuler une page web.
- Dans outils de développement, aller dans Elements, onglet Properties à droite :
    - childNodes révèle les enfants de l'élément. length : 1 veut dire qu'il y a un enfant.
    - nodeType : 3 veut dire que c'est un élément de typer texte. 1 veut dire élément.
- `setAttribute` permet de créer ou remplacer un attribut. par exemple : `mainContent.setAttribute("align","right");` 
- `createElement` permet de créer des noeuds de type élément (de type 1)
- `createTextNode` permet de créer des noeuds de type texte (de type 3)
- `appendChild` permet de créer un enfant à un élément. exemple :`document.getElementById("trivia").appendChild(newHeading);`

## Chapitre 5 - Travailler avec les évènements de Javascript
- addEventListener pour surveiller les évènements. `element.addEventListener(event, function, useCapture)`
- Dans vidéo , problème lors de la création de la fonction en ligne `alert('Bonjour ')`
- l'objet `window`est l'objet le plus élevé en Javascript, le *top level object*. Même `document` est l'enfant de `window` (la fenêtre du navigateur).
- onClick : utilisé par exemple sur `document` pour savoir quand on clique dans le document
- onLoad : par exemple pour charger une fonction quand la page est chargée
- onBlur : est déclenché quand on quitte le champs de formulaire.
- onFocus : est déclenché lorsque le curseur est disponible dans le champs de formulaire.



    
-----------  
## Markdown code
[Markdown sur OpenClassroom](https://openclassrooms.com/fr/courses/1304236-redigez-en-markdown "markdown sur openclassroom")  
*Emphasize* _emphasize_  
**Strong** __Strong__  
A [link](http://example.com "Title").  
Some text with [a link][1] and
another [link][2].  

[1]: http://example.com/ "Title"
[2]: http://example.org/ "Title"

Logo: ![Alt](https://i2.wp.com/s.wordpress.org/about/images/logos/wordpress-logo-32.png "Title")

Smaller logo: ![Alt][1]
[1]: https://i2.wp.com/s.wordpress.org/about/images/wpmini-grey.png "Title"

Linked logo: [![alt text](https://i2.wp.com/s.wordpress.org/about/images/wpmini-grey.png)]
(http://wordpress.com/ "Title")

I have more [^1] to say up here.

[^1]: To say down here.

* Item
* Item
- Item
- Item

1. Item
2. Item

 	

3. Item
4. Item
   * Mixed
   * Mixed  
5. Item

 	

> Quoted text.
> > Quoted quote.

> * Quoted 
> * List	

  Begin each line with 
  two spaces or more to 
  make text look
  e x a c t l y 
  like  you  type i
  t.

  `This is code`

~~~~
This is a 
piece of code 
in a block
~~~~

```
This too
``` 	

```css
#button {
    border: none;
}
```

 	

# Header 1
## Header 2
### Header 3 
#### Header 4 ####
##### Header 5 #####
###### Header 6 ######

WordPress
:  A semantic personal publishing platform 

Markdown
:  Text-to-HTML conversion tool

Markdown converts text to HTML.

*[HTML]: HyperText Markup Language
