<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Google Sign-In Example</title>
    <script src="https://accounts.google.com/gsi/client" async defer></script>

  </head>
   <body>
    <div id="g_id_onclick"
         data-client_id="36603383535-2e0mifttfv5bupd43dcdfk00as2k6b7s.apps.googleusercontent.com"
         data-context="signin"
         data-ux_mode="popup"
         data-callback="handleCredentialResponse"
         data-auto_prompt="false">
    </div>

    <div class="g_id_signin"
         data-type="standard"
         data-shape="rectangular"
         data-theme="outline"
         data-text="signin_with"
         data-size="large"
         data-logo_alignment="left">
    </div>

    <script>
  window.onclick = function () {
    google.accounts.id.initialize({
      client_id: '36603383535-2e0mifttfv5bupd43dcdfk00as2k6b7s.apps.googleusercontent.com',
      callback: handleCredentialResponse
    });
    google.accounts.id.prompt();
  };
</script>
</body>
</html>


  <!-- <body>
    <script src="https://accounts.google.com/gsi/client" async defer></script>
    <div
      id="g_id_onload"
      data-client_id="36603383535-2e0mifttfv5bupd43dcdfk00as2k6b7s.apps.googleusercontent.com"
      data-callback="handleCredentialResponse"
    ></div>
    <div class="g_id_signin" data-type="standard"></div> -->

    <!-- <script>
      window.onload = function () {
        google.accounts.id.initialize({
          client_id:
            "36603383535-2e0mifttfv5bupd43dcdfk00as2k6b7s.apps.googleusercontent.com",
          callback: handleCredentialResponse,
        });
        google.accounts.id.prompt();
      };
    </script> -->
  <!-- </body> -->
<!-- </html> -->
