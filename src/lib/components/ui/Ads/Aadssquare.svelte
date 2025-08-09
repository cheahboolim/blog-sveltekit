<script>
  // Props so you can easily reuse with different ads or sizes if needed
  export let dataAa = '2406099';
  export let width = '300px';
  export let height = '250px';
  export let src = `//ad.a-ads.com/${dataAa}/?size=300x250`;
</script>

<div
  id="frame"
  style={`width:${width}; margin:auto; z-index:99998; height:auto;`}
>
  <iframe
    data-aa={dataAa}
    src={src}
    style={`border:0; padding:0; width:${width}; height:${height}; overflow:hidden; display:block; margin:auto;`}
  ></iframe>
</div>
