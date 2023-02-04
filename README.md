# Star Box
<p>This is one of my favourite projects that I made and transformed it into kind of ReactJS template</p>
<p>It uses tailwindCSS along with normal CSS, so to change colors you can tweak those easily ;)</p>


<p>It is easy to use, and you can also make variations:</p>
<p>Use these as props to modify and make your own blinking box</p>
<ul>
<li><b>width</b> --It determines the size of star container --default value 10 </li>
<li><b>speed</b> --It determines the speed at which starts are rendered -- default 100 <b>--max 100</b></li>
<li><b>percent</b> --It determines count of stars generated --default 1 <b>--max 1</b></li>
<li><b>radii</b> --It determines the scaling radii of stars --default "20%" <b>max--"100%"</b></li>
</ul>
<h3>Sample of this project</h3>

![stars.gif](stars.gif)

Code for this sample

```javascript
    <BlinkBox width={30} speed={100} percent={0.5} radii={'80%'}/>
```