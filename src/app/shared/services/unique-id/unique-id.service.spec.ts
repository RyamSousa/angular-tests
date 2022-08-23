import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {
	it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
        should generete id when called with prefix`, () => {
		const prefix = "app";
		const service = new UniqueIdService();
		const id = service.generateUniqueIdWithPrefix(prefix);

		expect(id).toContain(`${prefix}-`);
	});
});
