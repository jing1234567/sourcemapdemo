import axios from "axios";
import sourceMap from "source-map-js"
const getSourceMap = async (url: string) => {
  const res = await axios.get(url);
  return res;
}

const findCodeBySourceMap = async (stackFrame: any) => {
  const sourceMapFile = await getSourceMap(stackFrame.fileName+'.map');
  const fileContent = sourceMapFile.data;
  const consumer = await new sourceMap.SourceMapConsumer(fileContent);
  const originalPosition = consumer.originalPositionFor({
    line: stackFrame.lineNumber,
    column: stackFrame.columnNumber || 0
  })
  const code = consumer.sourceContentFor(originalPosition.source);
  console.log('code', code);
} 

export default findCodeBySourceMap;