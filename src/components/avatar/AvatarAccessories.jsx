import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { avatarShopCatalog } from '../../data/avatarRewards';
import { CardRounded } from '../ui/CardRounded';
import { Button3D } from '../ui/Button3D';
import { Gem, Check } from 'lucide-react';

export const AvatarAccessories = () => {
  const { gameState, buyInventoryItem, equipItem } = useGame();
  const [activeTab, setActiveTab] = useState('hats');

  const catalogItems = avatarShopCatalog[activeTab] || [];

  return (
    <CardRounded>
      <h3 style={{ fontFamily: 'var(--font-rounded)', fontSize: '1.3rem', fontWeight: '700', marginBottom: '16px' }}>
        Avatar Accessories & Wardrobe
      </h3>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', overflowX: 'auto', pb: '8px' }}>
        {['hats', 'glasses', 'outfits', 'pets'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              backgroundColor: activeTab === tab ? 'var(--primary)' : 'var(--bg-main)',
              color: activeTab === tab ? '#fff' : 'var(--text-muted)',
              fontWeight: '700',
              fontFamily: 'var(--font-rounded)',
              cursor: 'pointer',
              textTransform: 'capitalize'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Item Catalog Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '14px' }}>
        {catalogItems.map(item => {
          const categoryKey = activeTab.slice(0, -1); // 'hats' -> 'hat'
          const isEquipped = gameState.equippedAvatar[categoryKey] === item.id.replace(`${categoryKey}_`, '');
          const isUnlocked = gameState.unlockedInventory.includes(item.id);

          return (
            <div
              key={item.id}
              style={{
                border: `2px solid ${isEquipped ? 'var(--primary)' : 'var(--border-light)'}`,
                borderRadius: 'var(--radius-md)',
                padding: '14px',
                textAlign: 'center',
                backgroundColor: isEquipped ? 'var(--primary-light)' : 'var(--bg-card-solid)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                {item.name}
              </span>

              {isEquipped ? (
                <div style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Check size={16} /> Equipped
                </div>
              ) : isUnlocked ? (
                <Button3D
                  size="sm"
                  variant="secondary"
                  onClick={() => equipItem(categoryKey, item.id.replace(`${categoryKey}_`, ''))}
                >
                  Equip
                </Button3D>
              ) : (
                <Button3D
                  size="sm"
                  variant="warning"
                  onClick={() => buyInventoryItem(item.id, item.cost)}
                  icon={Gem}
                >
                  {item.cost}
                </Button3D>
              )}
            </div>
          );
        })}
      </div>
    </CardRounded>
  );
};
