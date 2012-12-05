﻿using Tron.Utilities;

namespace Tron.GameServer
{
    public class MovementPayload : IPayload
    {
        public long ID { get; set; }
        public CycleMovementFlag Direction { get; set; }
        public Vector3 Position { get; set; }        
    }
}