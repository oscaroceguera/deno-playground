import {dogsModel, IDog} from '../models/index.ts'


export const getDogs = ({ response }: { response: any }) => {
  response.body = dogsModel
}

export const getDog = ({params, response}: {params: { name: string}, response: any}) => {
  const dog = dogsModel.filter((dog) => dog.name === params.name)
  if(dog.length) {
    response.status = 200
    response.body = dog[0]
    return
  }

  response.status = 400
  response.body = { msg: `Cannot find dog ${params.name}`}
}

export const addDog = async ({request, response}: {request: any, response: any}) => {
  const body = await request.body();
  const dog: IDog = body.value
  dogsModel.push(dog)

  response.body = {msg: 'OK'}
  response.status = 200
}

export const updateDog = async({
  params,
  request,
  response
}: {
  params: {
    name: string
  },
  request: any,
  response: any
}) => {
  const temp = dogsModel.filter((existingDog) => existingDog.name === params.name)
  const body = await request.body()
  const {age}: {age: number} = body.value

  if(temp.length){
    temp[0].age = age
    response.status = 200
    response.body = {msg: 'OK'}
    return
  }

  response.status = 400
  response.body = { msg: `Cannot find dog ${params.name}`}
}

export const removeDog = ({params, response}: {params: {name: string}, response: any}) => {
  const lengthBefore = dogsModel.length
  const dogs = dogsModel.filter(dog => dog.name !== params.name)

  if(dogs.length === lengthBefore) {
    response.status = 400
    response.body = { msg: `Cannot find dog ${params.name}`}
    return
  }

  response.body = {msg: 'OK'}
  response.status = 200
}