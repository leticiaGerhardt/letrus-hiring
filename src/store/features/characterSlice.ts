import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

interface Character {
  id: number;
  name: string;
  species: string;
  gender: string;
  image: string;
  episode: Array<string>
}

interface CharactersState {
  data: Character[];
  loading: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string | null;
}

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async () => {
  const response = await api.get('');
  return response.data.results as Character[];

});

const charactersSlice = createSlice({
  name: 'characters',
  initialState: { data: [], loading: 'idle', error: null } as CharactersState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.data = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error.message || 'Failed to fetch characters';
      });
  },
});

export default charactersSlice.reducer;
