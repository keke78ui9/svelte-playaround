```
npm install -g stylelint stylelint-config-standard stylelint-config-recommended
npx stylelint "**/*.css"
npx stylelint "**/*.{css,scss,sass}"
```


# stylelint-config-standard
https://github.com/stylelint/stylelint-config-standard
https://github.com/stylelint/stylelint-config-recommended

## more stylelint
https://github.com/stylelint/awesome-stylelint



# fix css style
```
npx stylelint "**/*.css" --fix 
```

# turn off rules
```
/* max-empty-lines */

a {}
```

# sample stylelint setup
```
{
    "extends": [
        "stylelint-config-standard", 
        "stylelint-config-recommended",
        "stylelint-config-sass-guidelines"
    ],
    "rules": {
    }
}
```


#ignore style example
```
/* stylelint-disable selector-type-no-unknown */
unknown-selector {
/* stylelint-enable selector-type-no-unknown */
```