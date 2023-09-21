import MyUrlField from "./MyUrlField";

const urlField = require("./MyUrlField");
test("Palin text to Url link",()=>{
  const record = useRecordContext();
  expect(MyUrlField("Sincere@april.biz")).toBe(record["Sincere@april.biz"]);});