type BoardType = Array<Array<0 | 1>>;
class TemplateGOL {
    title : string;
    value : BoardType
    img : string
    constructor(title : string, value : BoardType){
        this.title = title;
        this.value = value;
    }
}


const glider = new TemplateGOL("Glider", [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1]
]
)


const blinker = new TemplateGOL("Blinker", [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
]
)


const gosperGliderGun = new TemplateGOL("Gosper Glider Gun", [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
    [0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   ])


const block = new TemplateGOL("Block", [
    [1, 1],
    [1, 1]
]
)


const bar = new TemplateGOL("Bar", [
    [1, 1, 1]
]
)


const bee = new TemplateGOL("Bee", [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
]
)


const cross = new TemplateGOL("Cross",[
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0]
]
)


const ship = new TemplateGOL("Ship", [
    [1, 0, 1],
    [0, 1, 0],
    [0, 0, 1]
]
)

const achimsp4 = new TemplateGOL("Achim's p4", [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0]
]

)


export {glider, blinker, gosperGliderGun, block, bar, bee, cross, ship, achimsp4, BoardType, TemplateGOL}