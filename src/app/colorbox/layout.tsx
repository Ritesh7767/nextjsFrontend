export default function ColorBoxLayout({children, red, blue}:Readonly<{children: React.ReactNode, red : React.ReactNode, blue : React.ReactNode}>){
    return (
        <div>
            {children}
            {true ? red : blue}
            {/* {blue} */}
        </div>
    )
}