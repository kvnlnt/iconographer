# Iconographer

## Install

#### OSX

    brew install fontforge --with-python
    npm install grunt-webfont --save-dev

For more setup instructions, see https://github.com/sapegin/grunt-webfont

## Usage

### Generate Icons
Place svg files in the icons folder and run:

    grunt

### Implementation:
A `nml-icons.css` file is generated. It contains a class for each svg icon with a `nml-icon-[filename]` naming convention. For example, file living here `./icons/star.svg` will result in a class called `nml-icon-star`.

 * Install the `nml-icons.css` file.
 * Use the following markup: `<i class="nml-icon nml-icon-star"></i>`