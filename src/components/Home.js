export default function Home (props) {
    return (
        <div>
            <div className="container col-md-6 border border-light ">
                <div className="">
                    <div>
                        <img src={props.img} style={{width: 'auto', maxWidth: '100%', height: 'auto'}}/>
                    </div>
                    <div>
                        <h1>{props.name}</h1>
                        <p className="col-md-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}