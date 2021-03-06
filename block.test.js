const Block = require("./block");
const {GENESIS_DATA} = require("./config");
describe("block",()=>{

    const timestamp = "a-date";
    const lastHash = "foo-hash";
    const hash = "bar-hash";
    const data = ["blockchain","data"];
    const block = new Block(
        {
            timestamp : timestamp,
            lastHash : lastHash,
            hash : hash,
            data : data
        }
    );

    it("has a timestamp, lasthash, hash , and data property",()=>{
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });

    describe("genesis()",() =>{
        const genesisBlock = Block.genesis();

        it("returns block instance",()=>{
            expect(genesisBlock instanceof Block).toBe(true);
        });
        it("returns the genesis data",() =>{
            expect(genesisBlock).toEqual(GENESIS_DATA);
        });
    });

});