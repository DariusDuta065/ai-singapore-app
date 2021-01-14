<script>
export default {
  name: "Intercom",
  mounted: () => {
    window.intercomSettings = {
      app_id: "sf4590cy",
    };

    var w = window;
    var ic = w.Intercom;

    if (typeof ic === "function") {
      ic("reattach_activator");
      ic("update", w.intercomSettings);
    } else {
      var d = document;
      var i = function () {
        i.c(arguments);
      };
      i.q = [];
      i.c = function (args) {
        i.q.push(args);
      };

      w.Intercom = i;

      var l = function () {
        var s = d.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://widget.intercom.io/widget/<YOUR WIDGET ID>";

        var x = d.getElementsByTagName("script")[0];
        x.parentNode.insertBefore(s, x);
      };

      setTimeout(() => {
        l();
      }, 2000);
    }
  },
};
</script>
