class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      redirect_to api_pokemon(@pokemon)
    else
      flash.now[:errors] = @pokemon.errors.full_messages
    end
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:name, :image_url, :defense, :attack, :moves)
  end
end
