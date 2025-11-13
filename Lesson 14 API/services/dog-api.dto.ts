export interface DogApiDto {
    data: BreedDto | GroupDto | FactsDto
}

interface BreedDto {

    id: string,
    type: string,
    attributes: {
        name: string,
        description: string,
        life: {
            max: number,
            min: number
        },
        male_weight: {
            max: number,
            min: number
        },
        female_weight: {
            max: number,
            min: number
        },
        hypoallergenic: boolean
    }
}

interface GroupDto {

    id: string,
    type: string,
    attributes: {
        name: string
    },
    relationships: {
        breeds: {
            data: [
                {
                    id: string,
                    type: string
                }
            ]
        }
    }
}

interface FactsDto {
    facts: string [],
    success: bolean
}
