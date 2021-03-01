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

## vs code extension
https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint

## 
npx stylelint-find-rules

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

# example run lint
```
stylelint '**/*.{css,scss,sass}' --config '.stylelintrc.json'
```

# example run script
use specific config file, any warning will take as errors
```
stylelint '**/*.{css,scss,sass}' --config 'stylelint.config.js' --max-warnings 0
```

# ignore style example
```
/* stylelint-disable selector-type-no-unknown */
unknown-selector {
/* stylelint-enable selector-type-no-unknown */
```