import {Typography} from "@mui/material";

const subtext = new Map([
    ['Cream Ale', 'puto el que lee'],
    ['Baltic Porter', 'definition of porter lagger'],
    ['Kolsch', 'fill definition for this one'],
    ['Ipa Blanca', 'fill definition for this one'],
    ['Lager Ambar Checa', 'fill definition for this one']
]);

export default function BeerType(name) {
    const sbt = subtext.get(name)
    const fileName = `${name}.png`
    return (
        <div>
            <img src = {fileName} alt={name}/>
            <Typography>{sbt}</Typography>
        </div>
    )
}
