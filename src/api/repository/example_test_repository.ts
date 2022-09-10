import { AppDataSource } from "../data-source";
import { example_text } from "../entity/example_text";


const exampleTextRepository = AppDataSource.getRepository(example_text)

export const getTextById = async (_id: number) => {
    let textData = await exampleTextRepository.findOneBy({
        id: _id,
    })

    return textData.text_value;
}