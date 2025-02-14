import { Realm } from '@realm/react';

type GenerateProps = {
  user_id: string;
  description: string;
  license_plate: string;
};

export class Historic extends Realm.Object {
  _id!: Realm.BSON.UUID;
  user_id!: string;
  license_plate!: string;
  description!: string;
  status!: string;
  created_at!: Date;
  updated_at!: Date;

  static generate({ user_id, description, license_plate }: GenerateProps) {
    return {
      _id: new Realm.BSON.UUID(), 
      user_id,
      description,
      license_plate,
      status: 'departure',
      created_at: new Date(),
      updated_at: new Date(),
    };
  }

  static schema: Realm.ObjectSchema = {
    name: 'Historic',
    primaryKey: '_id',

    properties: {
      _id: { type: 'uuid' }, 
      user_id: { type: 'string', indexed: true },
      license_plate: { type: 'string' },
      description: { type: 'string' },
      status: { type: 'string' },
      created_at: { type: 'date' },
      updated_at: { type: 'date' },
    },
  };
}
