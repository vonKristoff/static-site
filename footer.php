</div> <!-- end of content -->
<div class="how">
  <div class="reveal">
  <pre><code class="language-javascript"><?= $usage ?></code></pre>  
  </div>
</div>
<div class="talk">
  <div class="close"></div>
  <div class="container">
      <div id="disqus_thread"></div>
  </div>
</div>
<div id="disqus_thread"></div>
<ul><li title='info' class='nfo'></li></ul>
<div class="footer">
    <div class="desc">
        <p><?= $description ?></p>
        <div class="option">
            <ul>
                <li class='info'>BIRD ( twitter )</li>
                <li class='info'>SPEECH ( comments )</li>
                <li class='info'>TRIANGLE ( usage )</li>
                <li class='info'>HEAD ( download )</li>
            </ul>
        </div>
    </div>
</div>
<script type="text/javascript">
/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
var disqus_shortname = '<?= $disqus ?>'; // required: replace example with your forum shortname

/* * * DON'T EDIT BELOW THIS LINE * * */
(function() {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();
</script>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="js/prism.js" data-default-language="markup"></script>
<script src="js/jumble.js"></script>
<script src="js/mousewheel.min.js"></script>
<script src="js/scrollbar.min.js"></script>
<script src="js/controls.js"></script>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-40858550-3', 'bite-software.com');
  ga('send', 'pageview');

</script>
</html>