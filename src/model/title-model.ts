/**
 * The specification for a title
 */
export interface ITitleModel {
	/**
	 * The displayable text for a title
	 */
	text: string;
}

/**
 * A minimal object representation of a title
 */
export class TitleModel implements ITitleModel{
	text: string;

	constructor(obj: ITitleModel) {
		this.text = obj.text;
	}
}
