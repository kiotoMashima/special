export default function extractSpecial({ special }) {
      const result = [];
      for (let i = 0; i < special.length; i++) {
          const { id, name, icon, description = 'Описание недоступно' } = special[i];
          result.push({ id, name, description, icon });
      }
      return result;
  }
  console.log(extractSpecial(character));
  