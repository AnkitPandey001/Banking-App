import HeaderBox from "@/components/HeaderBox"
import RightSideBar from "@/components/RightSideBar"
import TotalBalanceBox from "@/components/TotalBalanceBox"

const Home = () => {

    const loggedIn = {
        firstName:"Ankit",
        lastName:"Pandey",
        email:"ankit@123"
    }

  return (
    <section className="home">
    <div className="home-content">
     <header className="home-header">
        <HeaderBox
         type="greeting"
         title="Welcome"
         user={loggedIn?.firstName || "Guest"}
         subtext="Access and manage your account and transactions efficiently."
       />
     </header>
    <TotalBalanceBox
     accounts={[]}
     totalBanks={1}
     totalCurrentBalance={1250.36}
    />
    
      {/* Reacent Transaction */}

      RECENT TRANSCATION
    </div>
   
    <RightSideBar
     User={loggedIn}
     transaction={[]}
     banks={[{currentBalance:1234.56},{currentBalance:12345.6}]}
    />
   </section>
  )
}

export default Home
