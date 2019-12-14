import {ITitleModel, TitleModel} from "../../src/model/title-model";
import { expect } from "chai";

describe('title-model', () => {
	it('should copy properties from interface', () => {
		const toCopy: ITitleModel = {
			text: "test1"
		};

		const newModel: ITitleModel = new TitleModel(toCopy);
		expect(newModel.text).to.equal(toCopy.text);
	});
});
