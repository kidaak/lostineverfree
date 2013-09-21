describe "Ponies", ->
  it 'should be defined', ->
    expect(Mlp.Collections.Ponies).toBeDefined()

  it 'can be instantiated', ->
    ponies = new Mlp.Collections.Ponies
    expect(ponies).not.toBeNull()


