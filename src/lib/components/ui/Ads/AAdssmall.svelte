<script>
  // Optional props so you can reuse with different ad slots
  export let dataAa = '2406097';
  export let width = '320px';
  export let height = '50px';
  export let src = `//ad.a-ads.com/${dataAa}/?size=320x50`;
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
