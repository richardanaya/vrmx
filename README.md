# vrmx - a hypertext for the metaverse

Inspired by [vrml](https://en.wikipedia.org/wiki/VRML), [a-frame](https://aframe.io/), and [htmx](https://htmx.org/) — vrmx is a [hypertext](https://en.wikipedia.org/wiki/Hypertext) for building an interactable server-generated [metaverse](https://en.wikipedia.org/wiki/Metaverse).

```html
<html>
  <head>
    <title>Metaverse</title>
    <script src="https://unpkg.com/vrmx/dist/vrmx.js"></script>
  </head>
  
  <!-- on the nearest detected ground plane with origin 
  about 3 meters away create a brown table-shaped box 
  with a hat floating above it -->
  <mv-space plane="ground" preferred-distance="3">
    <mv-object y="1" post="/hat-touched" src="hat.gltf" swap="self"></mv-object>
    <mv-object y=".025">
      <geo-box widght="1" height=".05" depth="1">
      <mat-std color="brown">
    <mv-object>
  </mv-space>
        
  <!-- on the nearest detected wall plane create some 
  text to instruct the user what to do -->
  <mv-space plane="wall">
    <mv-object>
      <geo-text>Touch the hat below</geo-text>
      <mat-std color="white">
    </mv-object>
  </mv-space>
    
  <!-- create an anchor point about 3 meters for a help icon -->  
  <mv-space anchor="help" preferred-distance="3">
    <mv-object y="2" post="/help" src="question_mark.gltf" swap="self"></mv-object>
  </mv-space>
    
</html>
```

```python
@app.post("/hat-touched")
def hat_touched():
    return '<mv-object src="rabbit.gltf">'
    
@app.post("/help")
def help():
    return """
      <mv-object y="1">
        <geo-text>Welcome to a metaverse made with vrmx</geo-text>
        <mat-std color="white">
      </mv-object>
      <mv-object>
        <geo-text>for more infomation go to</geo-text>
        <mat-std color="white">
      </mv-object>
      <mv-object y="-1" href="https://github.com/richardanaya/vrml">
        <geo-text>https://github.com/richardanaya/vrm</geo-text>
        <mat-std color="blue">
      </mv-object>
    """
```
