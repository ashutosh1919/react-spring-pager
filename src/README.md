## What is this?

It is an npm package which let's you build an awesome animated viewpager to showcase images. Internally it uses `react-spring` and `react-use-gesture`. It is a ready-to-use npm package which you can use anywhere in your website. It adjusts itself based on the parent element.

## Installation

`npm install react-spring-pager`

## Usage

You can create viewpager containing images anywhere in your website using this npm package. Make sure on the three most important things given below. Without them, it may not work properly and scalably.
- Import the `SpringPager` component as shown in below example.
- It is suggested that you wrap the `SpringPager` component inside `div`, where `SpringPager` can take the complete height and width of that `div`. You can resize parent `div` as you want.
- It is mandatory to provide id of the parent `div` as prop in `SpringPager` component.

## Example

```javascript
import SpringPager from 'react-spring-pager';
...

const images = [
    // Provide URLs of Images that you want to display in Viewpager.
];

function App(props){
    return (
        ...
        <div id="viewpager_id">
            <SpringPager pages={images} parent_id={"viewpager_id"} />
        </div>
        ...
    );
}
```

## Options

Component `SpringPager` has two mandatory options `pages` and `parent_id`. The descriptions about which are given below.
- `pages`: List of URLs of images that you want to display in Viewpager.
- `parent_id`: ID of parent element of `SpringPager`.

## About Creator

Developed by [Ashutosh Hathidara](http://ashutoshhathidara.com/).