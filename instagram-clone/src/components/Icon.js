import SVG from 'react-inlinesvg'


export default function Icon({name, size, ... props}) {
    return (
        <div>
            <SVG
                //preProcessor={(code) => code.replace(/fill=".*?"/g, 'fill="currentColor"')}
                src={`${process.env.PUBLIC_URL}/icons/${name}.svg`}
                height={size}
                width={size} 
                {...props}>
            </SVG>
        </div>
    )
}

