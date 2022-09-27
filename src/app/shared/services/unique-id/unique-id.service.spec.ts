import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {
	let service: UniqueIdService = null;

	beforeEach(() => {
		service = new UniqueIdService();
	});

	it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
        should generete id when called with prefix`, () => {
		const prefix = "app";
		const id = service.generateUniqueIdWithPrefix(prefix);

		expect(id.startsWith(`${prefix}-`)).toBeTrue();
	});

	it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
        should not generate duplicate IDs when called multiple times`, () => {
		const prefix = "app";
		const ids = new Set();

		for (let i = 0; i < 10; i++) {
			ids.add(service.generateUniqueIdWithPrefix(prefix));
		}

		expect(ids.size).toBe(10);
	});

	it(`${UniqueIdService.prototype.getNumberOfGeneretedUniqueIds.name}
        should return the number of generatedIds when called`, () => {
		const prefix = "app";

		service.generateUniqueIdWithPrefix(prefix);
		service.generateUniqueIdWithPrefix(prefix);

		expect(service.getNumberOfGeneretedUniqueIds()).toBe(2);
	});

	it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
        should throw when called with empty`, () => {
		const emptyValues = [null, undefined, "", "0", "1"];

		emptyValues.forEach((emptyValue) => {
			expect(() => service.generateUniqueIdWithPrefix(emptyValue))
				.withContext(`Empty value: ${emptyValue}`)
				.toThrow();
		});
	});
});
