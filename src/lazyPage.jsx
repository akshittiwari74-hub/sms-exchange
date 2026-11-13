// Code-split pages that still prerender and hydrate cleanly.
//
// Each page's JavaScript is a separate file, so a phone opening /otp-sms only
// downloads the OTP page code. Unlike React.lazy, a page can be loaded *before*
// rendering: the prerender script loads every page first (so the HTML is
// complete), and the browser loads the current page before hydrating (so the
// first render matches the HTML exactly). Pages reached by in-app navigation
// load on demand inside <Suspense>.

export function lazyPage(loader) {
  let Component = null;
  let promise = null;

  const load = () => {
    promise ||= loader().then((mod) => {
      Component = mod.default;
    });
    return promise;
  };

  function Page(props) {
    if (!Component) throw load(); // picked up by the nearest <Suspense>
    return <Component {...props} />;
  }
  Page.load = load;
  return Page;
}
