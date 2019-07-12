# Javascript
## intro
- Javascript : Langage de programmation d'internet
- écrire variable en anglais car le reste du language est en anglais, l'anglais est plus concis, langue commune dans les équipes multilingues, pas de carcatères spéciaux.
- Prérequis : HTML et CSS

## Chapitre 1 - Découvrir Javascript
- ctrl + maj + i = outil de développement dans chrome

## Chapitre 2 - Connaître les principales syntaxes de Javascript
- Début de vidéo ["Découvrir la structure de Javascript"](https://www.linkedin.com/learning/l-essentiel-de-javascript/decouvrir-la-structure-de-javascript?u=42107057 "Lien vers la vidéo")
- Javascript est un language compilé qui n'a pas besoin d'interprétation avant d'arriver au navigateur
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
- Pour créer des variables en JS, il suffit de *déclarer* `var nomDeLaVariable;`
- Puis il faut l'*initialiser* `nomDeLaVariable = "valeur";`
- On peut le faire en une ligne `var nomDeLaVariable = "valeur";`
- `var`n'est pas obligatoire pour déclarer une variable mais il vaut mieux le faire tout le temps
- Pas d'espace, de tirets6, dans le nom des variables 
- On peut utiliser `_`,`$`, des nombres mais pas en début de variable
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
## Markdown code
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
