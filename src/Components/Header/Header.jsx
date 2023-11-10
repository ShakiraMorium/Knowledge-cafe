import Profile from '../../assets/images/profile.png'


const Header = () => {

    return (
        <div className='flex justify-between items-center p-4 max-w-7xl mx-auto'>

            <header className='text-4xl font-bold  text-center'>Knowledge Cafe</header>
            <img src={Profile} alt="" />
            

        </div>
    );
};



export default Header;