export default function HelloWorld(){
    const propsUserCard = {
        nama: "Dape",
        nim: "2355301036",
        tanggal: "3-12-2025"
    }
    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <QuoteText/>
            {/* <UserCard
                nama="Daffa"
                nim="255301036"
                tanggal={new Date().toLocaleDateString()}
                /> */}
                <UserCard {...propsUserCard}/>

                <img src="img/maill.jpg" alt="logo" />
        </div>
    )
}

function GreetingBinjai(){
    return (
        <small>Salam Dari Binjai</small>
    )
}

function QuoteText() {

        const text = "Mulutmu Harimaumu";
        const text2 = "Aku ingin Jadi Macan";
        return (
            <div>
                <hr/>
                <p>{text.toLowerCase()}</p>
                <p>{text2.toUpperCase()}</p>
            </div>
        )
}

function UserCard(props){
    return (
        <div>
            <hr />
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}
