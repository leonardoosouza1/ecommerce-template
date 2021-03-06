import CategoryButtons from "./CategoryButtons"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children, categories }) => {
  return (
    <div className="flex justify-center bg-gray-200">
      <div className="max-w-screen-lg flex flex-col min-h-screen w-full">
        {/*-------------- Nav Bar -------------------*/}
        <Navbar />
        {/*-------------- Categories -------------------*/}
        <CategoryButtons categories={categories} />
        {/*-------------- Product with children -------------------*/}
        <div className="flex-grow">{children}</div>
        {/*-------------- Footer-------------------*/}
        <Footer />
      </div>
      <div
        hidden
        id="snipcart"
        data-api-key="ODhhNWUxOGEtNTk0OC00OTQwLWJkOWMtM2M1ZmNjODU1ZDJhNjM3MzMyNzM0NjM1OTMyNjcz"
      />
    </div>
  )
}

export default Layout
